import { registerTransforms } from "@tokens-studio/sd-transforms";
import signale from "signale";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["input/*.json"],
  platforms: {
    tokens: {
      buildPath: "dist/",
      transforms: [
        "ts/color/modifiers",
        "ts/color/css/hexrgba",
        "ts/shadow/css/shorthand",
        "ts/border/css/shorthand",
        "ts/typography/css/shorthand",
        "ts/resolveMath",
        "ts/type/fontWeight",
        "ts/size/lineheight",
        "ts/size/css/letterspacing",
        "ts/opacity",
        "ts/descriptionToComment",
        "name/cti/kebab",
        "size/rem",
      ],
      files: [
        {
          destination: "pandacss.js",
          format: "javascript/module",
        },
        {
          destination: "pandacss.d.ts",
          format: "typescript/module-declarations",
        },
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

export const transform = () => {
  signale.pending("Transforming input…");

  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
};
