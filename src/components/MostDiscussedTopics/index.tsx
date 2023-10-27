import Table from "../Table";
import MostDiscussedTopicsProps from "./props";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

import { mostDiscussedTopicsTableHeader } from "./constants";
import { RowInterface } from "../Table/props";

const MostDiscussedTopics: FC<MostDiscussedTopicsProps> = ({ data }) => {
  const [mostDiscussedTopicsTableRows, setMostDiscussedTopicsTableRows] =
    useState<RowInterface[]>([]);

  useEffect(() => {
    updateTable();
  }, [data]);

  const updateTable = () => {
    const newRows: RowInterface[] = [];

    data.forEach((infoToShow, index) => {
      newRows.push({
        id: `mostDiscussedTopicsTable_${index}`,
        cells: [
          { id: `position_${index}`, align: "left", element: `# ${index + 1}` },
          { id: `theme_${index}`, align: "left", element: infoToShow.label },
        ],
      });
    });

    setMostDiscussedTopicsTableRows(newRows);
  };

  return (
    <Box p="0" bg="transparent" w="100%">
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
};

export default MostDiscussedTopics;
