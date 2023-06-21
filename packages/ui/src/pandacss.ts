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
    tokens: {
      spacing: {
        $1: { value: "0.25rem" },
        $2: { value: "0.5rem" },
        $3: { value: "0.75rem" },
        $4: { value: "1rem" },
        $5: { value: "1.25rem" },
        $6: { value: "1.5rem" },
        $7: { value: "1.75rem" },
        $8: { value: "2rem" },
        $9: { value: "2.25rem" },
        $10: { value: "2.5rem" },
        $12: { value: "2.75rem" },
        $14: { value: "3rem" },
        $16: { value: "3.25rem" },
        $18: { value: "3.5rem" },
        $20: { value: "3.75rem" },
        $24: { value: "4rem" },
        $28: { value: "4.25rem" },
        $32: { value: "4.5rem" },
        $36: { value: "4.75rem" },
        $40: { value: "5rem" },
      },
      colors: {
        primary: tokens.main.primary,
        secondary: tokens.main.secondary,
        ...tokens.neutrals,
      },
    },
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
