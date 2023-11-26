import Chart from "../Chart";
import ErrorsByTypeProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const ErrorsByType: FC<ErrorsByTypeProps> = ({ data }) => {
  const [configuration, setConfiguration] = useState(defaultConfiguration);

  useEffect(() => {
    if (data) updateChart();
  }, [data]);

  const getDefaultConfiguration = () => {
    return JSON.parse(JSON.stringify(defaultConfiguration));
  };

  const updateChart = () => {
    const defaultConfiguration = getDefaultConfiguration();

    const newSeries: number[] = [];
    const newLabels: string[] = [];

    data.forEach((errorsByTypes) => {
      newSeries.push(errorsByTypes.errors);
      newLabels.push(errorsByTypes.type);
    });

    defaultConfiguration.series = newSeries;
    defaultConfiguration.options.labels = newLabels;

    setConfiguration(defaultConfiguration);

    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Tipos de erro</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="pie"
        height={330}
      />
    </Box>
  );
};

export default ErrorsByType;
