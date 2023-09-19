import Table from "../../components/Table";
import SearchModal from "./SearchModal";
import UserRoleEnum from "../../utils/enums/userRole.enum";
import userRequests from "../../utils/requests/user.requests";
import UserInterface from "../../utils/interfaces/user.interface";
import ConfirmModal from "../ConfirmModal";
import UpdateRoleModal from "./UpdateRoleModal";

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
  const toast = useToast();

  const searchModalController = useDisclosure();
  const updateRoleModalController = useDisclosure();
  const removeUserModalController = useDisclosure();

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [userToRemove, setUserToRemove] = useState<string | undefined>();
  const [userToUpdate, setUserToUpdate] = useState<string | undefined>();
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

  const updateUserRole = async (role: UserRoleEnum) => {
    if (!userToUpdate) return;
    const response = await userRequests.update({ id: userToUpdate, role });

    if (response === "error") {
      toast({
        title: "Não foi possível atualizar usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    toast({
      title: "Usuário atualizado.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    searchUsers();
  };

  const openUpdateUserRoleModal = (userId: string) => {
    setUserToUpdate(userId);
    updateRoleModalController.onOpen();
  };

  const cancelUpdateUserRole = () => {
    setUserToUpdate(undefined);
    updateRoleModalController.onClose();
  };

  const removeUser = async (id: string) => {
    const response = await userRequests.remove(id);

    if (response === "error") {
      toast({
        title: "Não foi possível remover usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    toast({
      title: "Usuário removido com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setUserToRemove(undefined);
    searchUsers();
  };

  const cancelRemoveUser = () => {
    setUserToRemove(undefined);
  };

  const openConfirmRemoveUserModal = (userId: string) => {
    setUserToRemove(userId);
    removeUserModalController.onOpen();
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
                  onClick={() => openUpdateUserRoleModal(newUser.id)}
                >
                  Gerenciar privilégios
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  color="gray.500"
                  leftIcon={<Icon as={BiTrashAlt} />}
                  onClick={() => openConfirmRemoveUserModal(newUser.id)}
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

      <ConfirmModal
        isOpen={removeUserModalController.isOpen}
        onClose={removeUserModalController.onClose}
        title="ATENÇÃO"
        body="Tem certeza de que deseja remover o usuário do sistema? Essa ação é irreversível."
        customCancelButton={{
          label: "Cancelar",
          onClick: () => cancelRemoveUser(),
        }}
        customConfirmButton={{
          label: "Remover usuário",
          onClick: () => {
            if (userToRemove) removeUser(userToRemove);
          },
        }}
      />

      <UpdateRoleModal
        isOpen={updateRoleModalController.isOpen}
        onClose={cancelUpdateUserRole}
        confirmButton={updateUserRole}
      />
    </Box>
  );
}
