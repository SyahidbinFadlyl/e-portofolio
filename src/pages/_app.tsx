import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";
import theme from "../theme/index";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Muhammad Syahid</title>
        <meta name="description" content="Syahid - Software Engineer" />
        <link rel="icon" href="/favico/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={inter.variable}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
