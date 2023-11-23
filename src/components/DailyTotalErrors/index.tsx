import Chart from "../Chart";
import DailyTotalErrorsProps from "./props";
import moment from "moment";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";

const DailyTotalErrors: FC<DailyTotalErrorsProps> = ({ data }) => {
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

      newSeries[0].data.push({ x: date, y: informationToShow.errors });
    });

    let newConfiguration = defaultConfiguration;
    newConfiguration.series = newSeries;

    setConfiguration(newConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="subtitle">Erros diários</Text>
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

export default DailyTotalErrors;
