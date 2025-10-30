"use client";

import { useEffect, useRef } from "react";
import { initClarity } from "@/lib/clarity";

const CONSENT_STORAGE_KEY = "userAcceptedAnalytics";

export default function ClarityProvider() {
  const hasTriggered = useRef(false);

  useEffect(() => {
    const triggerClarity = () => {
      if (hasTriggered.current) {
        return;
      }
      try {
        const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        if (consent === "true") {
          hasTriggered.current = true;
          void initClarity();
        }
      } catch {
        // Fail silently to avoid blocking the render path.
      }
    };

    triggerClarity();

    const handleStorage = (event) => {
      if (event.key === CONSENT_STORAGE_KEY && event.newValue === "true") {
        triggerClarity();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("atlas-consent-granted", triggerClarity);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("atlas-consent-granted", triggerClarity);
    };
  }, []);

  return null;
}
