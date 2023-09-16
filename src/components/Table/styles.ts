import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFFFF",
    color: "#2D3748",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#2D3748",
  fontSize: 14,
}));
