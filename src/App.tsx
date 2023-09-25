import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";
import { SearchProvides } from "./contexts/SearchContext";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <SearchProvides>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </SearchProvides>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
