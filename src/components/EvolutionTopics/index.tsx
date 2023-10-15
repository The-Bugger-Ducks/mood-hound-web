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
    return {
      series: [
        {
          name: "POSITIVE",
          data: [],
        },
        {
          name: "NEGATIVE",
          data: [],
        },
        {
          name: "NEUTRAL",
          data: [],
        },
      ],

      options: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },

        colors: ["#38A169", "#E53E3E", "#3182CE"],

        dataLabels: {
          enabled: false,
        },

        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },

        markers: {
          size: 0,
        },

        xaxis: {
          title: {
            text: "Período",
          },
        },

        yaxis: {
          title: {
            text: "Total de avaliações",
          },
        },

        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    } as any;
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
    <Box m="2rem 0" p="0" bg="transparent" w="100%">
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
