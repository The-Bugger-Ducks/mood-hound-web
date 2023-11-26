import PerformanceMetrics from "../../components/PerformanceMetrics";
import SystemUsers from "../../components/SystemUsers";

import { Flex } from "@chakra-ui/react";

export default function System() {
  return (
    <Flex flexDir={"column"} gap={"2rem"}>
      <PerformanceMetrics />
      <SystemUsers />
    </Flex>
  );
}
