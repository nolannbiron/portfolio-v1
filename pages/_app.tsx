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
          <meta name="description" content="Passionate Full-Stack Developer. Hi there 👋 My name is Nolann and I build some stuff living in the web, blockchain or outside." />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-R1J7DV2QSD"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-R1J7DV2QSD');
              `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
