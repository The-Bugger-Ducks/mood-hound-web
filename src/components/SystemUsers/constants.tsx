import { RowInterface } from "../../components/Table/props";

export const systemUsersTableHeader: RowInterface = {
  id: "systemUsersTableHeader",
  cells: [
    { align: "left", element: "Nome", id: "name" },
    { align: "left", element: "Privilégio", id: "role" },
    { align: "left", element: "E-mail", id: "email" },
    { align: "left", element: "Ações", id: "actions" },
  ],
};
