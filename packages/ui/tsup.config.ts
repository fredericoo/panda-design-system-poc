import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/pandacss.ts"],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm"],
  external: ["style-engine", "react"],
});
