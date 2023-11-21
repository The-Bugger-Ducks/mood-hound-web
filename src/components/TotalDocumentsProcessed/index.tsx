import TotalDocumentsProcessedProps from "./props";
import BasicCard from "../BasicCard";

import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const TotalDocumentsProcessed: FC<TotalDocumentsProcessedProps> = ({
  data,
}) => {
  return (
    <Box p="0" bg="transparent" w="100%" h="100%">
      <Flex>
        <Text variant="subtitle">Total de documentos processados</Text>
      </Flex>

      <BasicCard label="Total de documentos processados" value={data} />
    </Box>
  );
};

export default TotalDocumentsProcessed;
