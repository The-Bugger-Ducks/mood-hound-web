import { RowInterface } from "../Table/props";

export const limitReviewsTable = 7;

export const lastReviewsTableHeader: RowInterface = {
  id: "lastReviewsTableHeader",
  cells: [
    { id: "date", align: "left", element: "Data" },
    { id: "themes", align: "left", element: "Temas" },
    { id: "description", align: "left", element: "Descrição" },
  ],
};
