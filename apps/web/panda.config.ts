import { preset } from "@inploi/ploi";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",
  presets: [preset],
  emitPackage: true,
  outdir: "style-engine",
});
