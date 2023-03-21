'use client'

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <Flex flexDir="column" height="100vh">
            <Header />
            <Box flex="1 0 auto">{children}</Box>
            <Footer />
        </Flex>
    )
}
