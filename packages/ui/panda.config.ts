import { defineConfig } from "@pandacss/dev";
import { preset } from "./src";

const config = defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Ploi overrides
  jsxFramework: "react",
  presets: [preset],
  outdir: "style-engine",
  emitPackage: true,
});

export default config;
