import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
      contrast: "#2575dc",
    },
    secondary: {
      main: "#19857b",
      contrast: "#67646b",
    },
    error: {
      main: red.A400,
    },
    blue: { main: "#2575dc" },
    indigo: { main: "#6610f2" },
    purple: { main: "#5d54e4" },
    pink: { main: "#e83e8c" },
    red: { main: "#e45454" },
    orange: { main: "#fb9c5d" },
    yellow: { main: "#ffc107" },
    green: { main: "#7fad4a" },
    teal: { main: "#20c997" },
    cyan: { main: "#17a2b8" },
    white: { main: "#fff" },
    gray: { main: "#6c757d" },
    grayDark: { main: "#343a40" },
    success: { main: "#7fad4a" },
    info: { main: "#52baff" },
    warning: { main: "#fb9c5d" },
    danger: { main: "#e45454" },
    light: { main: "#ebeaec" },
    dark: { main: "#2a2b2d" },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fafafa",
        },
      },
    },
  },
});

export default theme;
