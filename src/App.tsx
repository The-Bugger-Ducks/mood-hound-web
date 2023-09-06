import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
