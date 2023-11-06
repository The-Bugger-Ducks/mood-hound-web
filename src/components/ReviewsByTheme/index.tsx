import Chart from "../Chart";
import ReviewsByThemeProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const ReviewsByTheme: FC<ReviewsByThemeProps> = ({ data }) => {
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
    const newCategories = defaultConfiguration.options.xaxis.categories;

    data.topics.forEach((topic) => {
      newCategories.push(topic.topic);
      newSeries[0].data.push(topic.positive);
      newSeries[1].data.push(topic.negative);
    });

    defaultConfiguration.series = newSeries;
    defaultConfiguration.options.xaxis.categories = newCategories;

    setConfiguration(defaultConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Análise de sentimentos por tema</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="bar"
        height={330}
      />
    </Box>
  );
};

export default ReviewsByTheme;
