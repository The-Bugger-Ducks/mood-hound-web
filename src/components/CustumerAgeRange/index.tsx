import Chart from "../Chart";
import CustumerAgeRangeProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const CustumerAgeRange: FC<CustumerAgeRangeProps> = ({ data }) => {
  const [configuration, setConfiguration] = useState(defaultConfiguration);

  useEffect(() => {
    if (data) updateChart();
  }, [data]);

  const getDefaultConfiguration = () => {
    return JSON.parse(JSON.stringify(defaultConfiguration));
  };

  const updateChart = () => {
    const defaultConfiguration = getDefaultConfiguration();

    defaultConfiguration.series = data.values;
    defaultConfiguration.options.labels = data.labels;

    setConfiguration(defaultConfiguration);
    setConfiguration(defaultConfiguration);

    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Total de avaliações por faixa etária</Text>
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

export default CustumerAgeRange;
