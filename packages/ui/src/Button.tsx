"use client";
import { styled } from "style-engine/jsx";

export const Button = styled("button", {
  base: {
    rounded: "button.borderRadius",
  },
  variants: {
    size: {
      sm: {
        textStyle: "button.label.s",
        px: "md",
      },
      md: {
        textStyle: "button.label.m",
        px: "lg",
      },
      lg: {
        textStyle: "button.label.l",
        px: "xl",
      },
    },
    variant: {
      primary: {
        bg: "button.primary.default.background",
        color: "button.primary.default.label",
        _hover: {
          bg: "button.primary.hover.background",
          color: "button.primary.hover.label",
        },
      },
      secondary: {
        bg: "button.secondary.default.background",
        color: "button.secondary.default.label",
      },
    },
  },
});

export type ButtonProps = Parameters<typeof Button>[0];
