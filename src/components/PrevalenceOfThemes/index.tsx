import Chart from "../Chart";
import PrevalenceOfThemesProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration, xaxisCategories } from "./constants";

const PrevalenceOfThemes: FC<PrevalenceOfThemesProps> = ({ data }) => {
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

    newSeries.forEach((newSerie: { name: string, data: number[] }) => {
      xaxisCategories.forEach(categorie => {
        const topic = data?.topics?.find(({ topic }) => topic === categorie)

        if (topic) {
          if (newSerie.name == "TOTAL") {
            newSerie.data.push(topic.total);
          }
        }
      })
    });


    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Prevalência de Temas</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="radar"
        height={330}
      />
    </Box>
  );
};

export default PrevalenceOfThemes;
