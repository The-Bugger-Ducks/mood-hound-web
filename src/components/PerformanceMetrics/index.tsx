import TotalDocumentsProcessed from "../TotalDocumentsProcessed";
import PerformanceMetricsInterface from "../../utils/interfaces/performanceMetrics.interface";
import ErrorRate from "../ErrorRate";
import DailyTotalProcessingTime from "../DailyTotalProcessingTime";
import DailyTotalErrors from "../DailyTotalErrors";

import { Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { BiSlider } from "react-icons/bi";

export default function PerformanceMetrics() {
  const mock: PerformanceMetricsInterface = {
    totalDocumentsProcessed: 1,
    errorRate: {
      total: 1000,
      errors: 300,
    },
    dailyTotalProcessingTime: [
      { day: new Date().toString(), time: 45 },
      { day: new Date(8.64e15).toString(), time: 80 },
    ],
    dailyTotalErrors: [
      { day: new Date().toString(), errors: 45 },
      { day: new Date(8.64e15).toString(), errors: 80 },
    ],
  };

  return (
    <Flex p="0" bg="transparent" flexDir={"column"} gap={"2rem"}>
      <Flex>
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
        <ErrorRate data={mock.errorRate} />
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <DailyTotalProcessingTime data={mock.dailyTotalProcessingTime} />
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <DailyTotalErrors data={mock.dailyTotalErrors} />
      </Flex>
    </Flex>
  );
}
