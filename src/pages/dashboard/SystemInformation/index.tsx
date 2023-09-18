import Table from "../../../components/Table";

import { systemUsersTableHeader, systemUsersTableRows } from "./constants";
import { BiSlider } from "react-icons/bi";
import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react";

export default function SystemInformation() {
  return (
    <>
      <Box m="2rem 0" p="0" bg="transparent">
        <Flex>
          <Text variant="title">Usuários do sistema</Text>

          <Spacer />

          <Button
            size="sm"
            variant="ghost"
            color="teal.500"
            leftIcon={<Icon as={BiSlider} />}
          >
            Filtrar
          </Button>
        </Flex>

        <Table
          header={systemUsersTableHeader}
          rows={systemUsersTableRows}
          withEllipsisInRows
          withUppercaseInHeader
        />
      </Box>
    </>
  );
}
