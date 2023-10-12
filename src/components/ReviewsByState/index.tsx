import { Box, Flex, Text } from "@chakra-ui/react";
import GeoChart from "../GeoChart";

export default function ReviewsByState() {
  const data = [
    ["State", "Avaliações"],
    ["BR-SP", 30000],
    ["BR-RJ", 1000],
    ["BR-PE", 500],
    ["BR-AM", 100],
  ];

  return (
    <Box m="2rem 0" p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="title">Avaliações por Estado</Text>
      </Flex>

      <GeoChart data={data} />
    </Box>
  );
}
