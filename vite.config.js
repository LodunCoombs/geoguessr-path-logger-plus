import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/pathLogger.ts",
      userscript: {
        name: "GeoGuessr Path Logger Plus",
        namespace: "Odinman9847",
        version: "1.2.0-dev",
        description:
          "The 2026 Path Logger Upgrade. Now with duels support, customization, gradients, RDP smoothing, fixed bugs, and more.",
        author: "Odinman9847 (Original script by xsanda)",
        copyright: "2026, Odinman9847",
        "run-at": "document-start",
        grant: "none",
        license: "MIT",
        match: ["https://www.geoguessr.com/*"],
      },
    }),
  ],
});
