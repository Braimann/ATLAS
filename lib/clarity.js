"use client";

let clarityInitPromise;

/**
 * Initialize Microsoft Clarity once consent is granted and the ID is available.
 * Returns early on the server or when prerequisites are missing.
 */
export async function initClarity() {
  if (typeof window === "undefined") {
    return;
  }

  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  if (!clarityId) {
    return;
  }

  if (window.__clarityInitialized) {
    return;
  }

  if (!clarityInitPromise) {
    clarityInitPromise = import("clarity-js")
      .then((module) => {
        const clarityInstance = module.clarity ?? module.default;
        if (!clarityInstance) {
          throw new Error("clarity-js module did not provide an initialiser.");
        }

        if (typeof clarityInstance === "function") {
          clarityInstance("start", clarityId);
        } else if (typeof clarityInstance.start === "function") {
          clarityInstance.start({ projectId: clarityId });
        } else {
          throw new Error("clarity-js module missing start entry point.");
        }

        window.__clarityInitialized = true;
        if (process.env.NODE_ENV !== "production") {
          console.info("Microsoft Clarity initialised:", clarityId);
        }
      })
      .catch((error) => {
        clarityInitPromise = undefined;
        if (process.env.NODE_ENV !== "production") {
          console.error("Microsoft Clarity failed to start:", error);
        }
      });
  }

  return clarityInitPromise;
}
