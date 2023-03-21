'use client'

import { Spinner, Stack } from '@chakra-ui/react'
import Layout from '../components/Layout'

export default function LoadingPage(): JSX.Element {
    return (
        <Stack spacing={4} h="full" placeItems="center">
            <Spinner />
        </Stack>
    )
}
