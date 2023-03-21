'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../theme'
import Layout from '../components/Layout'
import Script from 'next/script'

interface Props {
    children?: React.ReactNode
}

export default function RootLayout({ children }: Props): JSX.Element {
    return (
        <html>
            <Head>
                <title>{`<NolannBiron />`}</title>
                <link rel="shortcut icon" href="favicon.svg" />
                <link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta
                    name="description"
                    content="Passionate Full-Stack Developer. Hi there 👋 My name is Nolann and I build some stuff living in the web, blockchain or outside."
                />
            </Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-224721553-1" />
            <Script
                id="gtag"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-224721553-1');      
                    `,
                }}
            />
            {/* <CacheProvider> */}
            <ChakraProvider theme={theme}>
                <Layout>{children}</Layout>
            </ChakraProvider>
            {/* </CacheProvider> */}
        </html>
    )
}
