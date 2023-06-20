"use client";
import { styled } from "style-engine/jsx";

export const Button = styled("button", {
  base: {
    py: "2",
    px: "4",
    rounded: "md",
  },
  variants: {
    variant: {
      primary: {
        bg: "primary",
        color: "white",
      },
      secondary: {
        bg: "secondary",
        color: "white",
      },
    },
  },
});

export type ButtonProps = Parameters<typeof Button>[0];
