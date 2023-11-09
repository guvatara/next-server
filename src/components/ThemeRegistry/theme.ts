import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const colors = {
  blue: "#2575dc",
  indigo: "#6610f2",
  purple: "#5d54e4",
  pink: "#e83e8c",
  red: "#e45454",
  orange: "#fb9c5d",
  yellow: "#ffc107",
  green: "#7fad4a",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#fff",
  gray: "#6c757d",
  grayDark: "#343a40",
  success: "#7fad4a",
  info: "#52baff",
  warning: "#fb9c5d",
  danger: "#e45454",
  light: "#ebeaec",
  dark: "#2a2b2d",
  primary: "#2575dc",
  secondary: "#67646b",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
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
          backgroundColor: colors.light,
        },
      },
    },
  },
});

export default theme;
