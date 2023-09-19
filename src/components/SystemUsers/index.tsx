import Table from "../../components/Table";
import SearchModal from "./SearchModal";
import UserRoleEnum from "../../utils/enums/userRole.enum";
import userRequests from "../../utils/requests/user.requests";
import UserInterface from "../../utils/interfaces/user.interface";

import { useEffect, useState } from "react";
import { BiSlider, BiTrashAlt } from "react-icons/bi";
import { MdBrightness5 } from "react-icons/md";
import { RowInterface } from "../Table/props";
import { systemUsersTableHeader } from "./constants";

import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function SystemUsers() {
  const searchModalController = useDisclosure();
  const toast = useToast();

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [systemUsersTableRows, setSystemUsersTableRows] = useState<
    RowInterface[]
  >([]);

  useEffect(() => {
    searchUsers();
  }, []);

  useEffect(() => {
    refreshTable(users);
  }, [users]);

  const searchUsers = async (
    name?: string,
    email?: string,
    role?: UserRoleEnum
  ) => {
    const response = await userRequests.search(name, email, role);

    if (response === "error") {
      toast({
        title: "Não foi possível recuperar usuários.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setUsers(response);
  };

  const refreshTable = (newUsers: UserInterface[]) => {
    const newSystemUsersTableRows: RowInterface[] = [];

    newUsers.forEach((newUser) => {
      newSystemUsersTableRows.push({
        cells: [
          { align: "left", element: newUser.name },
          {
            align: "left",
            element: <Badge colorScheme="teal">{newUser.role}</Badge>,
          },
          {
            align: "left",
            element: newUser.email,
          },
          {
            align: "left",
            element: (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  color="teal.500"
                  leftIcon={<Icon as={MdBrightness5} />}
                >
                  Gerenciar privilégios
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  color="gray.500"
                  leftIcon={<Icon as={BiTrashAlt} />}
                >
                  Remover do sistema
                </Button>
              </>
            ),
          },
        ],
      });
    });

    setSystemUsersTableRows(newSystemUsersTableRows);
  };

  return (
    <Box m="2rem 0" p="0" bg="transparent">
      <Flex>
        <Text variant="title">Usuários do sistema</Text>

        <Spacer />

        <Button
          size="sm"
          variant="ghost"
          color="teal.500"
          leftIcon={<Icon as={BiSlider} />}
          onClick={searchModalController.onOpen}
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

      <SearchModal
        isOpen={searchModalController.isOpen}
        onClose={searchModalController.onClose}
        confirmButton={searchUsers}
      />
    </Box>
  );
}
