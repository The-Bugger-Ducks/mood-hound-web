import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function AuthenticatedLayout() {
  return (
    <Box w="100%">
      <Header />
      <Navbar />
      <Box
        left={["0", "0", "0", "25vw", "20vw", "15vw"]}
        w={["100vw", "100vw", "100vw", "75vw", "80vw", "85vw"]}
        h="100vh"
        position="fixed"
        p="3rem"
        overflow="auto"
      >
        <Outlet />
      </Box>
    </Box>
  );
}
