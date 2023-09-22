import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
