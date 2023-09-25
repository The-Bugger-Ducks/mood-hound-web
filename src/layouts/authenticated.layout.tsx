import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  return (
    <Flex flexDir="column" gap="2.5rem" p="2.5rem">
      <Header />
      <Outlet />
    </Flex>
  )
}