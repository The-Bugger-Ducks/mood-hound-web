import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";
import { SearchProvides } from "./contexts/SearchContext";

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <SearchProvides>
        <Routes />
      </SearchProvides>
    </ChakraProvider>
  );
}

export default App;
