var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../design-tokens/dist/pandacss.js
var require_pandacss = __commonJS({
  "../design-tokens/dist/pandacss.js"(exports, module) {
    "use strict";
    module.exports = {
      "main": {
        "primary": {
          "value": "#e75057",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#e75057",
            "type": "color"
          },
          "name": "main-primary",
          "attributes": {},
          "path": [
            "main",
            "primary"
          ]
        },
        "secondary": {
          "value": "#101840",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#101840",
            "type": "color"
          },
          "name": "main-secondary",
          "attributes": {},
          "path": [
            "main",
            "secondary"
          ]
        }
      },
      "neutrals": {
        "white": {
          "value": "#ffffff",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#ffffff",
            "type": "color"
          },
          "name": "neutrals-white",
          "attributes": {},
          "path": [
            "neutrals",
            "white"
          ]
        },
        "n1": {
          "value": "#f9fafc",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#f9fafc",
            "type": "color"
          },
          "name": "neutrals-n1",
          "attributes": {},
          "path": [
            "neutrals",
            "n1"
          ]
        },
        "n2": {
          "value": "#f5f6fa",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#f5f6fa",
            "type": "color"
          },
          "name": "neutrals-n2",
          "attributes": {},
          "path": [
            "neutrals",
            "n2"
          ]
        },
        "n3": {
          "value": "#edeff5",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#edeff5",
            "type": "color"
          },
          "name": "neutrals-n3",
          "attributes": {},
          "path": [
            "neutrals",
            "n3"
          ]
        },
        "n4": {
          "value": "#d8dae5",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#d8dae5",
            "type": "color"
          },
          "name": "neutrals-n4",
          "attributes": {},
          "path": [
            "neutrals",
            "n4"
          ]
        },
        "n5": {
          "value": "#c1c4d6",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#c1c4d6",
            "type": "color"
          },
          "name": "neutrals-n5",
          "attributes": {},
          "path": [
            "neutrals",
            "n5"
          ]
        },
        "n6": {
          "value": "#919ab8",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#919ab8",
            "type": "color"
          },
          "name": "neutrals-n6",
          "attributes": {},
          "path": [
            "neutrals",
            "n6"
          ]
        },
        "n7": {
          "value": "#495985",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#495985",
            "type": "color"
          },
          "name": "neutrals-n7",
          "attributes": {},
          "path": [
            "neutrals",
            "n7"
          ]
        },
        "n8": {
          "value": "#182d63",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#182d63",
            "type": "color"
          },
          "name": "neutrals-n8",
          "attributes": {},
          "path": [
            "neutrals",
            "n8"
          ]
        },
        "black": {
          "value": "#080c24",
          "type": "color",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "#080c24",
            "type": "color"
          },
          "name": "neutrals-black",
          "attributes": {},
          "path": [
            "neutrals",
            "black"
          ]
        }
      },
      "fontFamilies": {
        "font": {
          "value": "Nexa",
          "type": "fontFamilies",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "Nexa",
            "type": "fontFamilies"
          },
          "name": "font-families-font",
          "attributes": {},
          "path": [
            "fontFamilies",
            "font"
          ]
        }
      },
      "lineHeights": {
        "0": {
          "value": "AUTO",
          "type": "lineHeights",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "AUTO",
            "type": "lineHeights"
          },
          "name": "line-heights-0",
          "attributes": {},
          "path": [
            "lineHeights",
            "0"
          ]
        },
        "1": {
          "value": 1.2,
          "type": "lineHeights",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "120%",
            "type": "lineHeights"
          },
          "name": "line-heights-1",
          "attributes": {},
          "path": [
            "lineHeights",
            "1"
          ]
        }
      },
      "fontWeights": {
        "extrabold": {
          "value": "Extra Bold",
          "type": "fontWeights",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "Extra Bold",
            "type": "fontWeights"
          },
          "name": "font-weights-extrabold",
          "attributes": {},
          "path": [
            "fontWeights",
            "extrabold"
          ]
        },
        "bold": {
          "value": 700,
          "type": "fontWeights",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "Bold",
            "type": "fontWeights"
          },
          "name": "font-weights-bold",
          "attributes": {},
          "path": [
            "fontWeights",
            "bold"
          ]
        }
      },
      "fontSize": {
        "base": {
          "value": "16",
          "type": "fontSizes",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "16",
            "type": "fontSizes"
          },
          "name": "font-size-base",
          "attributes": {},
          "path": [
            "fontSize",
            "base"
          ]
        },
        "h4": {
          "value": "40",
          "type": "fontSizes",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "40",
            "type": "fontSizes"
          },
          "name": "font-size-h4",
          "attributes": {},
          "path": [
            "fontSize",
            "h4"
          ]
        },
        "h1": {
          "value": "64",
          "type": "fontSizes",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "64",
            "type": "fontSizes"
          },
          "name": "font-size-h1",
          "attributes": {},
          "path": [
            "fontSize",
            "h1"
          ]
        }
      },
      "letterSpacing": {
        "0": {
          "value": "0.02em",
          "type": "letterSpacing",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "2%",
            "type": "letterSpacing"
          },
          "name": "letter-spacing-0",
          "attributes": {},
          "path": [
            "letterSpacing",
            "0"
          ]
        },
        "1": {
          "value": "-0.02em",
          "type": "letterSpacing",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "-2%",
            "type": "letterSpacing"
          },
          "name": "letter-spacing-1",
          "attributes": {},
          "path": [
            "letterSpacing",
            "1"
          ]
        },
        "2": {
          "value": "0em",
          "type": "letterSpacing",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "0%",
            "type": "letterSpacing"
          },
          "name": "letter-spacing-2",
          "attributes": {},
          "path": [
            "letterSpacing",
            "2"
          ]
        }
      },
      "paragraphSpacing": {
        "0": {
          "value": "0",
          "type": "paragraphSpacing",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "0",
            "type": "paragraphSpacing"
          },
          "name": "paragraph-spacing-0",
          "attributes": {},
          "path": [
            "paragraphSpacing",
            "0"
          ]
        }
      },
      "button": {
        "value": "Extra Bold 16px/AUTO Nexa",
        "type": "typography",
        "filePath": "input/tokens.json",
        "isSource": true,
        "original": {
          "value": {
            "fontFamily": "{fontFamilies.font}",
            "fontWeight": "{fontWeights.extrabold}",
            "lineHeight": "{lineHeights.0}",
            "fontSize": "{fontSize.base}",
            "letterSpacing": "{letterSpacing.0}",
            "paragraphSpacing": "{paragraphSpacing.0}",
            "paragraphIndent": "{paragraphIndent.0}",
            "textCase": "{textCase.none}",
            "textDecoration": "{textDecoration.none}"
          },
          "type": "typography"
        },
        "name": "button",
        "attributes": {},
        "path": [
          "button"
        ]
      },
      "h1": {
        "value": "Extra Bold 64px/1.2 Nexa",
        "type": "typography",
        "filePath": "input/tokens.json",
        "isSource": true,
        "original": {
          "value": {
            "fontFamily": "{fontFamilies.font}",
            "fontWeight": "{fontWeights.extrabold}",
            "lineHeight": "{lineHeights.1}",
            "fontSize": "{fontSize.h1}",
            "letterSpacing": "{letterSpacing.1}",
            "paragraphSpacing": "{paragraphSpacing.0}",
            "paragraphIndent": "{paragraphIndent.0}",
            "textCase": "{textCase.none}",
            "textDecoration": "{textDecoration.none}"
          },
          "type": "typography"
        },
        "name": "h1",
        "attributes": {},
        "path": [
          "h1"
        ]
      },
      "h4": {
        "value": "700 40px/1.2 Nexa",
        "type": "typography",
        "filePath": "input/tokens.json",
        "isSource": true,
        "original": {
          "value": {
            "fontFamily": "{fontFamilies.font}",
            "fontWeight": "{fontWeights.bold}",
            "lineHeight": "{lineHeights.1}",
            "fontSize": "{fontSize.h4}",
            "letterSpacing": "{letterSpacing.2}",
            "paragraphSpacing": "{paragraphSpacing.0}",
            "paragraphIndent": "{paragraphIndent.0}",
            "textCase": "{textCase.none}",
            "textDecoration": "{textDecoration.none}"
          },
          "type": "typography"
        },
        "name": "h4",
        "attributes": {},
        "path": [
          "h4"
        ]
      },
      "textCase": {
        "none": {
          "value": "none",
          "type": "textCase",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "none",
            "type": "textCase"
          },
          "name": "text-case-none",
          "attributes": {},
          "path": [
            "textCase",
            "none"
          ]
        }
      },
      "textDecoration": {
        "none": {
          "value": "none",
          "type": "textDecoration",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "none",
            "type": "textDecoration"
          },
          "name": "text-decoration-none",
          "attributes": {},
          "path": [
            "textDecoration",
            "none"
          ]
        }
      },
      "paragraphIndent": {
        "0": {
          "value": "0px",
          "type": "dimension",
          "filePath": "input/tokens.json",
          "isSource": true,
          "original": {
            "value": "0px",
            "type": "dimension"
          },
          "name": "paragraph-indent-0",
          "attributes": {},
          "path": [
            "paragraphIndent",
            "0"
          ]
        }
      },
      "base": {
        "value": "8px",
        "type": "borderRadius",
        "filePath": "input/tokens.json",
        "isSource": true,
        "original": {
          "value": "8px",
          "type": "borderRadius"
        },
        "name": "base",
        "attributes": {},
        "path": [
          "base"
        ]
      }
    };
  }
});

// src/panda.preset.ts
var import_pandacss = __toESM(require_pandacss(), 1);

// ../../node_modules/.pnpm/@pandacss+dev@0.3.2_@types+node@17.0.45_@types+react-dom@18.2.0_@types+react@18.2.0_astro@2.6.5_typescript@4.5.3/node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset2) {
  return preset2;
}
function createProxy() {
  const identity = (v) => v;
  return new Proxy(identity, {
    get() {
      return identity;
    }
  });
}
var defineTokens = createProxy();
var defineSemanticTokens = createProxy();

// src/panda.preset.ts
var preset = definePreset({
  theme: {
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
        $40: { value: "5rem" }
      },
      colors: __spreadValues({
        primary: import_pandacss.default.main.primary,
        secondary: import_pandacss.default.main.secondary
      }, import_pandacss.default.neutrals)
    }
  }
});

// src/Button.tsx
import { styled } from "style-engine/jsx";
var Button = styled("button", {
  base: {},
  variants: {
    variant: {
      primary: {
        bg: "primary",
        color: "white"
      },
      secondary: {
        bg: "secondary",
        color: "white"
      }
    }
  }
});

// src/Header.tsx
import { jsx } from "react/jsx-runtime";
var Header = ({ text }) => {
  return /* @__PURE__ */ jsx("h1", { children: text });
};
export {
  Button,
  Header,
  preset
};
//# sourceMappingURL=index.js.map