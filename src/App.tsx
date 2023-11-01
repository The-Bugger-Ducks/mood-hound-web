import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { OverviewProvider } from "./contexts/OverviewContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <OverviewProvider>
            <Routes />
          </OverviewProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
