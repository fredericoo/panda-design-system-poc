"use client";
import { styled } from "style-engine/jsx";

export const Button = styled("button", {
  base: {},
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
