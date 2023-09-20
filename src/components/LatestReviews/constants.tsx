import { Badge } from "@chakra-ui/react";
import { RowInterface } from "../Table/props";

export const lastReviewsTableHeader: RowInterface = {
  cells: [
    { align: "left", element: "Data" },
    { align: "left", element: "Temas" },
    { align: "left", element: "Descrição" },
  ],
};

export const lastReviewsTableRows: RowInterface[] = [
  {
    cells: [
      { align: "left", element: "21/07/2023" },
      {
        align: "left",
        element: (
          <>
            <Badge colorScheme="red">COR</Badge>{" "}
            <Badge colorScheme="green">ENTREGA</Badge>{" "}
            <Badge colorScheme="green">QUALIDADE</Badge>{" "}
          </>
        ),
      },
      {
        align: "left",
        element:
          "Chegou super rápido e adorei a qualidade, uma pena que veio da cor errada :(",
      },
    ],
  },

  {
    cells: [
      { align: "left", element: "21/07/2023" },
      {
        align: "left",
        element: (
          <>
            <Badge colorScheme="red">COR</Badge>{" "}
            <Badge colorScheme="green">ENTREGA</Badge>{" "}
            <Badge colorScheme="green">QUALIDADE</Badge>{" "}
          </>
        ),
      },
      {
        align: "left",
        element:
          "Chegou super rápido e adorei a qualidade, uma pena que veio da cor errada :(",
      },
    ],
  },

  {
    cells: [
      { align: "left", element: "21/07/2023" },
      {
        align: "left",
        element: (
          <>
            <Badge colorScheme="red">COR</Badge>{" "}
            <Badge colorScheme="green">ENTREGA</Badge>{" "}
            <Badge colorScheme="green">QUALIDADE</Badge>{" "}
          </>
        ),
      },
      {
        align: "left",
        element:
          "Chegou super rápido e adorei a qualidade, uma pena que veio da cor errada :(",
      },
    ],
  },

  {
    cells: [
      { align: "left", element: "21/07/2023" },
      {
        align: "left",
        element: (
          <>
            <Badge colorScheme="red">COR</Badge>{" "}
            <Badge colorScheme="green">ENTREGA</Badge>{" "}
            <Badge colorScheme="green">QUALIDADE</Badge>{" "}
          </>
        ),
      },
      {
        align: "left",
        element:
          "Chegou super rápido e adorei a qualidade, uma pena que veio da cor errada :(",
      },
    ],
  },
];
