import Table from "../../../components/Table";
import { Box, Text } from "@chakra-ui/react";
import { lastReviewsTableHeader, lastReviewsTableRows } from "./constants";

export default function ReviewAnalysis() {
  return (
    <>
      <Box m="2rem 0" p="0" bg="transparent">
        <Text variant="title">Últimas avaliações</Text>

        <Table
          header={lastReviewsTableHeader}
          rows={lastReviewsTableRows}
          withEllipsisInRows
          withUppercaseInHeader
        />
      </Box>
    </>
  );
}
