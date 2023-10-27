import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function AuthenticatedLayout() {
  return (
    <Box w="100%">
      <Navbar />

      <Box
        left="15vw"
        w="85vw"
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
