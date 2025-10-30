import { execSync } from "node:child_process";
import process from "node:process";

const shouldSkip =
  process.env.SKIP_LIGHTHOUSE === "true" ||
  process.env.NEXT_DISABLE_LIGHTHOUSE === "true";

if (shouldSkip) {
  console.log("Skipping Lighthouse checks (SKIP_LIGHTHOUSE flag detected).");
  process.exit(0);
}

try {
  execSync("npx lhci autorun --config=./lighthouserc.js", {
    stdio: "inherit",
  });
} catch (error) {
  console.error("Lighthouse checks failed.");
  if (error.status) {
    process.exit(error.status);
  }
  process.exit(1);
}
