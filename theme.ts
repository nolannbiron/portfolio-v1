// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  code: {
    component: "#4FC9B0",
    constant: "#52C0FF",
    variable: "#9DDBFE",
    key: "#589BD6",
    function: "#DCDDAA",
    sign: "#808080",
    import: "#C585C0",
    string: "#CE9178",
  },
  bg: {
    body: "#041F31",
  },
};

const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: "bg.body",
      color: "white",
      fontFamily: "Menlo, monospace",
      width: "100%",
      height: "100%",
      paddingBottom: "env(safe-area-inset-bottom)",
      paddingTop: "env(safe-area-inset-top)",
      paddingLeft: "env(safe-area-inset-left)",
      paddingRight: "env(safe-area-inset-right)"
    },
    // styles for the `a`
    a: {
      color: "teal.500",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

export default extendTheme({
  colors,
  styles,
});
