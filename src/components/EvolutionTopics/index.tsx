import Chart from "../Chart";
import EvolutionTopicsProps from "./props";
import moment from "moment";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const EvolutionTopics: FC<EvolutionTopicsProps> = ({ data }) => {
  const [configuration, setConfiguration] = useState(defaultConfiguration);

  useEffect(() => {
    if (data.length) updateChart();
  }, [data]);

  const getDefaultConfiguration = () => {
    return JSON.parse(JSON.stringify(defaultConfiguration));
  };

  const updateChart = () => {
    const defaultConfiguration = getDefaultConfiguration();
    const newSeries = defaultConfiguration.series;

    data.forEach((informationToShow) => {
      const date = moment(informationToShow.month).format("DD/MM/YYYY");

      newSeries.forEach((newSerie: any) => {
        if (newSerie.name == informationToShow.sentiment) {
          newSerie.data.push({ x: date, y: informationToShow.total });
        }
      });
    });

    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="title">Evolução dos temas</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="line"
      />
    </Box>
  );
};

export default EvolutionTopics;
