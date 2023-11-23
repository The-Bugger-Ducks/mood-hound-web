import Chart from "../Chart";
import TimeByPipelineStageProps from "./props";
import moment from "moment";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const TimeByPipelineStage: FC<TimeByPipelineStageProps> = ({ data }) => {
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
      const date = moment(informationToShow.day).format("DD/MM/YYYY");

      const stageIndex = newSeries.findIndex(
        (serie: any) => serie.name === informationToShow.stage
      );

      if (stageIndex < 0) {
        const newSerie = {
          name: informationToShow.stage,
          data: [{ x: date, y: informationToShow.time }],
        };
        newSeries.push(newSerie);
      } else {
        newSeries[stageIndex].data.push({ x: date, y: informationToShow.time });
      }
    });

    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="subtitle">Tempo por etapa da pipeline</Text>
      </Flex>

      <Chart
        options={configuration.options}
        series={configuration.series}
        type="line"
        height={330}
      />
    </Box>
  );
};

export default TimeByPipelineStage;
