import tokens from "@inploi/design-tokens/dist/pandacss";
import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

export const preset: Preset = definePreset({
  theme: {
    tokens: {
      colors: {
        primary: tokens.main.primary,
        secondary: tokens.main.secondary,
        ...tokens.neutrals,
      },
    },
  },
});
