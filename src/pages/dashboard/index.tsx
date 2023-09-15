import Header from "../../components/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex flexDir="column" gap="2.5rem" p="2.5rem">
      <Header />
      <Text>Olá, mundo!</Text>
    </Flex>
  );
}
