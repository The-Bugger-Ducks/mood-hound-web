import Chart from "../Chart";
import ErrorRateProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const ErrorRate: FC<ErrorRateProps> = ({ data }) => {
  const [configuration, setConfiguration] = useState(defaultConfiguration);

  useEffect(() => {
    if (data) updateChart();
  }, [data]);

  const getDefaultConfiguration = () => {
    return JSON.parse(JSON.stringify(defaultConfiguration));
  };

  const updateChart = () => {
    const defaultConfiguration = getDefaultConfiguration();
    const newSeries = defaultConfiguration.series;

    const total = data.total;

    if (total == 0) {
      newSeries.push(0);
    } else {
      const errorRate = data.errors;

      const percent = (errorRate * 100) / total;

      newSeries.push(percent.toFixed(2));
    }

    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Taxa de Erro</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="radialBar"
        height={540}
      />
    </Box>
  );
};

export default ErrorRate;
