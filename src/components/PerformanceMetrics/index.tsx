import TotalDocumentsProcessed from "../TotalDocumentsProcessed";
import PerformanceMetricsInterface from "../../utils/interfaces/performanceMetrics.interface";
import ErrorRate from "../ErrorRate";
import DailyTotalProcessingTime from "../DailyTotalProcessingTime";
import DailyTotalErrors from "../DailyTotalErrors";
import ErrorsByType from "../ErrorsByType";
import TimeByPipelineStage from "../TimeByPipelineStage";
import FilterModal from "../PerformanceMetrics/FilterModal";
import performanceMetricsRequests from "../../utils/requests/performanceMetrics.requests";

import { BiSlider } from "react-icons/bi";
import { useEffect, useState } from "react";

import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function PerformanceMetrics() {
  const toast = useToast();
  const filterModalController = useDisclosure();

  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();

  const [metrics, setMetrics] = useState<PerformanceMetricsInterface>({
    totalDocumentsProcessed: 0,
    errorRate: {
      total: 0,
      errors: 0,
    },
    dailyTotalProcessingTime: [],
    dailyTotalErrors: [],
    errorsByType: [],
    timeByPipelineStage: [],
  });

  useEffect(() => {
    getPerformanceMetrics();
  }, []);

  useEffect(() => {
    getPerformanceMetrics();
  }, [dateEnd, dateStart]);

  const applyFilter = (newDateStart?: Date, newDateEnd?: Date) => {
    setDateStart(newDateStart);
    setDateEnd(newDateEnd);
  };

  const getPerformanceMetrics = async () => {
    const newMetrics = await performanceMetricsRequests.get({
      dateStart,
      dateEnd,
    });

    if (newMetrics === "error") {
      toast({
        title: "Houve um erro ao carregar as métricas de performance.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setMetrics(newMetrics);
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
          onClick={filterModalController.onOpen}
        >
          Filtrar
        </Button>
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <TotalDocumentsProcessed data={metrics.totalDocumentsProcessed} />
        <ErrorRate data={metrics.errorRate} />
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <DailyTotalProcessingTime data={metrics.dailyTotalProcessingTime} />
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <DailyTotalErrors data={metrics.dailyTotalErrors} />
        <ErrorsByType data={metrics.errorsByType} />
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
        <TimeByPipelineStage data={metrics.timeByPipelineStage} />
      </Flex>

      <FilterModal
        onClose={filterModalController.onClose}
        isOpen={filterModalController.isOpen}
        confirmButton={applyFilter}
      />
    </Flex>
  );
}
