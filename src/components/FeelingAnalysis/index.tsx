import Chart from "../Chart";
import FeelingAnalysisProps from "./props";

import { FC, useEffect, useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { defaultConfiguration } from "./constants";
import { TbMoodHappy, TbMoodNeutral, TbMoodSad } from "react-icons/tb";

const FeelingAnalysis: FC<FeelingAnalysisProps> = ({ data }) => {
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

    newSeries[0].data = [data.resume.negative];
    newSeries[1].data = [data.resume.neutral];
    newSeries[2].data = [data.resume.positive];

    defaultConfiguration.series = newSeries;

    setConfiguration(defaultConfiguration);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Análise geral de sentimento</Text>
      </Flex>

      <Box p="0.5rem" bg="#FFF" borderRadius="1rem" border="1px solid #E2E8F0">
        <Flex flexDirection={["column", "column", "row"]}>
          <Flex
            p="2rem"
            borderRight={["none", "none", "1px solid #E2E8F0"]}
            borderBottom={["1px solid #E2E8F0", "1px solid #E2E8F0", "none"]}
            flexDir="column"
          >
            <Icon as={TbMoodSad} boxSize={"1.3rem"} color="red.500" />

            <Text as="b" color="red.500">
              Negativo
            </Text>

            <Text color="red.500">
              <b>{data.resume.negative}</b> avaliações
            </Text>
          </Flex>

          <Flex
            p="2rem"
            borderRight={["none", "none", "1px solid #E2E8F0"]}
            borderBottom={["1px solid #E2E8F0", "1px solid #E2E8F0", "none"]}
            flexDir="column"
          >
            <Icon as={TbMoodNeutral} boxSize={"1.3rem"} color="gray.500" />

            <Text as="b" color="gray.500">
              Neutro
            </Text>

            <Text color="gray.500">
              <b>{data.resume.neutral}</b> avaliações
            </Text>
          </Flex>

          <Flex
            p="2rem"
            flexDir="column"
            borderBottom={["1px solid #E2E8F0", "1px solid #E2E8F0", "none"]}
          >
            <Icon as={TbMoodHappy} boxSize={"1.3rem"} color="green.500" />

            <Text as="b" color="green.500">
              Positivo
            </Text>

            <Text color="green.500">
              <b>{data.resume.positive}</b> avaliações
            </Text>
          </Flex>
        </Flex>

        <Chart
          options={configuration.options}
          series={configuration.series}
          type="bar"
          chakraBg="transparent"
          chakraBorder="none"
          height={100}
        />
      </Box>
    </Box>
  );
};

export default FeelingAnalysis;
