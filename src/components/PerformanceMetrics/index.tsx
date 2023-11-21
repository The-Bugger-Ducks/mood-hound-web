import TotalDocumentsProcessed from "../TotalDocumentsProcessed";
import PerformanceMetricsInterface from "../../utils/interfaces/performanceMetrics.interface";

import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { BiSlider } from "react-icons/bi";

export default function PerformanceMetrics() {
  const mock: PerformanceMetricsInterface = {
    totalDocumentsProcessed: 1,
  };

  return (
    <Box p="0" bg="transparent">
      <Flex mb="2rem">
        <Text variant="title">Métricas de desempenho do sistema</Text>

        <Spacer />

        <Button
          size="sm"
          variant="ghost"
          color="teal.500"
          leftIcon={<Icon as={BiSlider} />}
          onClick={() => console.log("Filtrar")}
        >
          Filtrar
        </Button>
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <TotalDocumentsProcessed data={mock.totalDocumentsProcessed} />
      </Flex>
    </Box>
  );
}
