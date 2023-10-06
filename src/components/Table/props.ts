export default interface TableProps {
  withUppercaseInHeader?: boolean;
  withEllipsisInRows?: boolean;

  maxHeight?: {
    withPagination: string;
    withoutPagination: string;
  };

  header: RowInterface;
  rows: RowInterface[];

  paginationController?: {
    onNextPage: () => void;
    onPreviousPage: () => void;
  };
}

export interface RowInterface {
  cells: CellInteface[];
}

export interface CellInteface {
  id: string | number;
  align?: "left" | "inherit" | "center" | "justify" | "right";
  element?: JSX.Element | string;
  fontColor?: string;
}
