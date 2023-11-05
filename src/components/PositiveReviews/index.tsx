import Chart from "../Chart";
import PrevalenceOfThemesProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const PositiveReviews: FC<PrevalenceOfThemesProps> = ({ data }) => {
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

    const total = data.resume.total
    const positive = data.resume.positive

    const percent = ((positive * 100) / total)

    newSeries.push(percent.toFixed(2))

    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Porcentagem de avaliações positivas</Text>
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

export default PositiveReviews;
