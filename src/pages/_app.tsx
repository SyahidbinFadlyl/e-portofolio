import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";

import theme from "../theme/index"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
