import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
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
  },
});

export default chakraTheme;
