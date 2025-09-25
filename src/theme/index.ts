import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e2e8f0",
    },
    secondary: {
      main: "#94A3B8",
    },
    background: {
      default: "rgba(15, 23, 42, 1)",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: [
      "var(--font-inter)",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
