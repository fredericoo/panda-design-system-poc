import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

export const preset: Preset = definePreset({
  theme: {
    tokens: {
      colors: {
        primary: { value: "blue" },
        secondary: { value: "green" },
      },
    },
  },
});
