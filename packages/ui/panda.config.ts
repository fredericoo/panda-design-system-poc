import { defineConfig } from "@pandacss/dev";
import { preset } from "./src";

const config = defineConfig({
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Ploi overrides
  preflight: true,
  strictTokens: true,
  jsxFramework: "react",
  presets: [preset],
  outdir: "style-engine",
  emitPackage: true,
});

export default config;
