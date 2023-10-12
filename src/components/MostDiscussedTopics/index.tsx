import Table from "../Table";

import { Box, Flex, Text } from "@chakra-ui/react";

import {
  mostDiscussedTopicsTableHeader,
  mostDiscussedTopicsTableRows,
} from "./constants";

export default function MostDiscussedTopics() {
  return (
    <Box m="2rem 0" p="0" bg="transparent" w="100%">
      <Flex>
        <Text variant="title">TOP 05 Temas mais discutidos</Text>
      </Flex>

      <Table
        header={mostDiscussedTopicsTableHeader}
        rows={mostDiscussedTopicsTableRows}
        withEllipsisInRows
        withUppercaseInHeader
      />
    </Box>
  );
}
