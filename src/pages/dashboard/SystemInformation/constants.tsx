import { RowInterface } from "../../../components/Table/props";
import { BiTrashAlt } from "react-icons/bi";
import { MdBrightness5 } from "react-icons/md";
import { Badge, Button, Icon } from "@chakra-ui/react";

export const systemUsersTableHeader: RowInterface = {
  cells: [
    { align: "left", element: "Nome" },
    { align: "left", element: "Privilégio" },
    { align: "left", element: "E-mail" },
    { align: "left", element: "Ações" },
  ],
};

export const systemUsersTableRows: RowInterface[] = [
  {
    cells: [
      { align: "left", element: "Joana Paola" },
      {
        align: "left",
        element: <Badge colorScheme="teal">ADMINISTRADOR</Badge>,
      },
      {
        align: "left",
        element: "joanapaola.nunes@gmail.com",
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
  },
];
