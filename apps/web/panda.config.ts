import { preset } from "@inploi/ploi";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/*.{js,jsx,ts,tsx}",
  ],

  preflight: true,
  strictTokens: true,
  jsxFramework: "react",
  presets: [preset],
  outdir: "style-engine",
  emitPackage: true,
});
