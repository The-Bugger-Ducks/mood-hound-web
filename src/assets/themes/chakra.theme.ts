import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  styles: {
    global: {
      "html, body, root": {
        bg: "gray.50",
        "&::-webkit-scrollbar": {
          width: 3,
          height: 3,
        },
        "&::-webkit-scrollbar-track": {
          width: 1,
          height: 1,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#A8A8A8",
          borderRadius: "1px",
        },
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

        navbar_title: {
          fontSize: "md",
          color: "gray.300",
          fontWeight: "semibold",
          textTransform: "uppercase",
        },

        navbar_text: {
          fontSize: "md",
        },
      },
    },
  },
});

export default chakraTheme;
