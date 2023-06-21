/**
 * Do not edit directly
 * Generated on Wed, 21 Jun 2023 10:40:02 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "main": {
    "primary": DesignToken,
    "secondary": DesignToken
  },
  "neutrals": {
    "white": DesignToken,
    "n1": DesignToken,
    "n2": DesignToken,
    "n3": DesignToken,
    "n4": DesignToken,
    "n5": DesignToken,
    "n6": DesignToken,
    "n7": DesignToken,
    "n8": DesignToken,
    "black": DesignToken
  },
  "fontFamilies": {
    "font": DesignToken
  },
  "lineHeights": {
    "0": DesignToken,
    "1": DesignToken
  },
  "fontWeights": {
    "extrabold": DesignToken,
    "bold": DesignToken
  },
  "fontSize": {
    "base": DesignToken,
    "h4": DesignToken,
    "h1": DesignToken
  },
  "letterSpacing": {
    "0": DesignToken,
    "1": DesignToken,
    "2": DesignToken
  },
  "paragraphSpacing": {
    "0": DesignToken
  },
  "button": DesignToken,
  "h1": DesignToken,
  "h4": DesignToken,
  "textCase": {
    "none": DesignToken
  },
  "textDecoration": {
    "none": DesignToken
  },
  "paragraphIndent": {
    "0": DesignToken
  },
  "base": DesignToken
}
