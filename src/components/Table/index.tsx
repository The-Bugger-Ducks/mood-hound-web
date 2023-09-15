import muiTheme from "../../assets/themes/mui.theme";
import chakraTheme from "../../assets/themes/chakra.theme";

import TableProps from "./props";
import MuiTable from "@mui/material/Table";

import { FC } from "react";
import { StyledTableCell, StyledTableRow } from "./styles";
import { ThemeProvider } from "@emotion/react";
import { Box, ChakraProvider, useMediaQuery } from "@chakra-ui/react";

import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Stack,
  Pagination,
  TableBody,
} from "@mui/material";

const Table: FC<TableProps> = ({
  withUppercaseInHeader,
  withEllipsisInRows,
  maxHeight,
  header,
  rows,
  paginationController,
}) => {
  const [isLargerThan800h] = useMediaQuery("(min-height: 800px)");

  return (
    <ThemeProvider theme={muiTheme}>
      <ChakraProvider theme={chakraTheme}>
        <Box
          p="0.5rem"
          bg="#FFF"
          borderRadius="1rem"
          border="1px solid #E2E8F0"
        >
          <TableContainer
            sx={{
              "&::-webkit-scrollbar": {
                width: 4,
                height: 4,
              },
              "&::-webkit-scrollbar-track": {
                width: 4,
                height: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#319795",
                borderRadius: "10px",
              },
            }}
            style={{
              maxHeight: paginationController
                ? maxHeight
                  ? maxHeight.withPagination
                  : isLargerThan800h
                  ? "30rem"
                  : "20rem"
                : maxHeight
                ? maxHeight.withPagination
                : isLargerThan800h
                ? "35rem"
                : "25rem",
              marginBottom: "1rem",
            }}
          >
            <MuiTable
              stickyHeader
              size="small"
              aria-label="a dense table"
              style={{ paddingBottom: "0.5rem" }}
            >
              <TableHead>
                <TableRow sx={{ tr: { border: 1, borderColor: "#E2E8F0" } }}>
                  {header.cells.map((row, index) => (
                    <StyledTableCell
                      key={"header" + index}
                      align={row.align ?? "left"}
                      sx={
                        withEllipsisInRows
                          ? {
                              fontWeight: "bold",
                              fontColor: row.fontColor ?? "#4A5568",
                              textTransform: withUppercaseInHeader
                                ? "uppercase"
                                : "none",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "15rem",
                              padding: "1rem",
                            }
                          : {
                              fontWeight: "bold",
                              textTransform: withUppercaseInHeader
                                ? "uppercase"
                                : "none",
                              fontColor: row.fontColor ?? "#4A5568",
                              maxWidth: "15rem",
                              padding: "1rem",
                            }
                      }
                    >
                      {row.element ?? ""}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.length === 0 && (
                  <StyledTableRow sx={{ th: { border: 0 } }}>
                    <TableCell
                      colSpan={header.cells.length}
                      sx={
                        withEllipsisInRows
                          ? {
                              fontColor: "#4A5568",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "15rem",
                              padding: "1rem",
                            }
                          : {
                              fontColor: "#4A5568",
                              maxWidth: "15rem",
                              padding: "1rem",
                            }
                      }
                      align="center"
                      component="th"
                      scope="row"
                    >
                      Lista vazia
                    </TableCell>
                  </StyledTableRow>
                )}

                {rows.map((row, rowIndex) => (
                  <StyledTableRow
                    key={"row" + rowIndex}
                    sx={{ tr: { border: 1, borderColor: "#E2E8F0" } }}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <TableCell
                        key={"row" + rowIndex + "cell" + cellIndex}
                        sx={
                          withEllipsisInRows
                            ? {
                                fontColor: cell.fontColor ?? "#4A5568",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "15rem",
                                padding: "1rem",
                              }
                            : {
                                fontColor: cell.fontColor ?? "#4A5568",
                                maxWidth: "15rem",
                                padding: "1rem",
                              }
                        }
                        align={cell.align}
                        component="th"
                        scope="row"
                      >
                        {cell.element ?? ""}
                      </TableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>

          {paginationController && (
            <Stack direction="row-reverse">
              <Pagination
                page={paginationController.currentPage}
                onChange={paginationController.onChangePage}
                count={paginationController.totalPages}
                color="primary"
              />
            </Stack>
          )}
        </Box>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default Table;
