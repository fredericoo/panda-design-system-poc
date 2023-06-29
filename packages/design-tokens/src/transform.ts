import { registerTransforms } from "@tokens-studio/sd-transforms";
import signale from "signale";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

StyleDictionary.registerTransform({
  name: "semantic/core/dollar-to-curly",
  type: "value",
  transitive: false,
  matcher: (token) => {
    if (typeof token.value !== "string") return false;
    return !!token.value.match(/[^.]*\$[a-zA-z0-9-_.$]/g);
  },
  transformer: (token) => {
    // replaces the preceding dollar sign, wrapping the word in curly braces, but not the whole string.
    return token.value.replace(/([^.]*\$[a-zA-z0-9-_.$]+)/g, (match: string) =>
      match.replace(/^\$/, "{").concat("}")
    );
  },
});

const mathChars = ["+", "-", "*", "/"];
StyleDictionary.registerTransform({
  name: "ts/mathToCssCalc",
  type: "value",
  transitive: false,
  matcher: (token) => {
    if (typeof token.value !== "string") return false;
    const hasMathChars = mathChars.some((char) => token.value.includes(char));
    return hasMathChars;
  },
  transformer: (token) => {
    if (typeof token.value !== "string") return token;
    const newToken = token.value
      // replace all multi spaces with single space
      .replace(/\s\s+/g, " ")
      // removes all the space between math chars and other chars
      .replace(/\s*([+\-*/()])\s*/g, "$1");

    const expressions = newToken.split(" ").map((expression) => {
      // adds space between math chars and other chars
      expression = expression.replace(/([+\-*/()])/g, " $1 ");
      // wraps whole expression in calc()
      expression = `calc(${expression})`;
      return expression;
    });

    // readd multi values
    return expressions.join(" ");
  },
});

const sd = StyleDictionary.extend({
  source: ["input/**/*.json"],
  platforms: {
    tokens: {
      buildPath: "dist/",
      transforms: [
        "ts/color/modifiers",
        "ts/color/css/hexrgba",
        "ts/shadow/css/shorthand",
        "ts/border/css/shorthand",
        "ts/resolveMath",
        "semantic/core/dollar-to-curly",
        "ts/mathToCssCalc",
        "ts/size/px",
        "ts/type/fontWeight",
        "ts/size/lineheight",
        "ts/size/css/letterspacing",
        "ts/opacity",
        "ts/descriptionToComment",
        "size/rem",
        "name/cti/kebab",
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
