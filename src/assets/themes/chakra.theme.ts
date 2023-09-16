import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  styles: {
    global: {
      "html, body, root": {
        bg: "gray.50",
      },
    },
  },

  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "teal.500",
      },
    },

    Button: {
      defaultProps: {
        colorScheme: "teal",
      },
    },

    Tabs: {
      defaultProps: {
        colorScheme: "teal",
      },
    },

    Text: {
      variants: {
        title: {
          fontSize: "xl",
          color: "teal.500",
          fontWeight: "bold",
          mb: "1.5rem",
        },
      },
    },
  },
});

export default chakraTheme;
