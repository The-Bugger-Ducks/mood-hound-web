import { RowInterface } from "../Table/props";

export const takeReviewsTable = 7;

export const lastReviewsTableHeader: RowInterface = {
  cells: [
    { id: "date", align: "left", element: "Data" },
    { id: "themes", align: "left", element: "Temas" },
    { id: "description", align: "left", element: "Descrição" },
  ],
};
