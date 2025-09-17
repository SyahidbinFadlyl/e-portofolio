import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";

import theme from "../theme/index"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#e2e8f0",
//     },
//     secondary: {
//       main: "#94A3B8",
//     },
//     background: {
//       default: "rgba(15, 23, 42, 1)",
//     },
//     text: {
//       primary: "#e2e8f0",
//       secondary: "#94A3B8",
//     },
//   },
//   typography: {
//     fontFamily: "Inter",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         html: {
//           scrollBehavior: "smooth",
//         },
//       },
//     },
//   },
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </body>
    </html>

  );
}
