import tokens from "@inploi/design-tokens/dist/pandacss";
import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { Config } from "@pandacss/types";

export const preset: Preset = definePreset({
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    tokens: tokens.core,
    semanticTokens: tokens.semantic,
    textStyles: tokens.textStyles,
  },
});

export const pandaConfig: Partial<Config> = {
  preflight: true,
  strictTokens: true,
  jsxFramework: "react",
  presets: [preset],
  outdir: "style-engine",
  emitPackage: true,
};
