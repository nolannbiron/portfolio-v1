import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import theme from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <title>{`<NolannBiron />`}</title>
          <link rel="shortcut icon" href="favicon.svg" />
          <link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
