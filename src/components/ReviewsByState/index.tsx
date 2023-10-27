import GeoChart from "../GeoChart";
import ReviewsByStateProps from "./props";

import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const ReviewsByState: FC<ReviewsByStateProps> = ({ data }) => {
  return (
    <Box p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="title">Avaliações por Estado</Text>
      </Flex>

      <GeoChart data={data} />
    </Box>
  );
};

export default ReviewsByState;
