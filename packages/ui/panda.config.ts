import { defineConfig } from "@pandacss/dev";
import { pandaConfig } from "./src/pandacss";

const config = defineConfig({
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  ...pandaConfig,
});

export default config;
