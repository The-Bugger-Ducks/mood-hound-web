import createTheme from "@mui/material/styles/createTheme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#3182CE",
    },
  },

  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          padding: "0",
          marginTop: "0",
          marginBottom: "0",
          borderRadius: "16px",
          border: "none",
          minWidth: 650,
        },
      },
    },
    MuiTableCell: { styleOverrides: { root: { padding: "1rem" } } },
  },
});

export default muiTheme;
