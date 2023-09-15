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
    currentPage: number;
    totalPages: number;
    onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  };
}

export interface RowInterface {
  cells: CellInteface[];
}

export interface CellInteface {
  align?: "left" | "inherit" | "center" | "justify" | "right";
  element?: JSX.Element | string;
  fontColor?: string;
}
