import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <title>{`<NolannBiron />`}</title>
          <link rel="shortcut icon" href="favicon.svg" />
          <link href="http://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
