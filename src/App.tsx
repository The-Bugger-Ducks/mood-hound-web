import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";
import { SearchProvides } from "./contexts/SearchContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <SearchProvides>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SearchProvides>
    </ChakraProvider>
  );
}

export default App;
