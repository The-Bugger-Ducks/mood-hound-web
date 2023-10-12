import { RowInterface } from "../Table/props";

export const mostDiscussedTopicsTableHeader: RowInterface = {
  id: "mostDiscussedTopicsTableHeader",
  cells: [
    { id: "position", align: "left", element: "Posição" },
    { id: "theme", align: "left", element: "Tema" },
  ],
};

export const mostDiscussedTopicsTableRows: RowInterface[] = [
  {
    id: "1",
    cells: [
      { id: "position1", align: "left", element: "1" },
      { id: "theme1", align: "left", element: "Tema" },
    ],
  },
  {
    id: "2",
    cells: [
      { id: "position2", align: "left", element: "2" },
      { id: "theme2", align: "left", element: "Tema" },
    ],
  },
  {
    id: "3",
    cells: [
      { id: "position3", align: "left", element: "3" },
      { id: "theme3", align: "left", element: "Tema" },
    ],
  },
  {
    id: "4",
    cells: [
      { id: "position4", align: "left", element: "4" },
      { id: "theme4", align: "left", element: "Tema" },
    ],
  },
  {
    id: "5",
    cells: [
      { id: "position5", align: "left", element: "5" },
      { id: "theme5", align: "left", element: "Tema" },
    ],
  },
];
