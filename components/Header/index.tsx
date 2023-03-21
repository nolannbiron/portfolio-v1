'use client'

import { Text } from '@chakra-ui/react'
import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Link from 'next/link'
import { fadeInDown } from 'react-animations'
import { TextComponent } from '../Text'

const animation = keyframes`${fadeInDown}`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    animation: 1s ${animation};
    @media (max-width: 900px) {
        padding: 30px 15px;
    }
`

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 50px;
    p {
        text-shadow: 0px 0px 10px #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            span {
                text-decoration: underline;
                text-decoration-color: #5093ce;
                color: #5093ce;
                text-shadow: 0px 0px 10px #5093ce;
            }
        }
    }

    @media (max-width: 900px) {
        gap: 15px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Link href="/">
                <Text _hover={{ textDecoration: 'none' }} cursor={'pointer'} fontSize={['22px', '30px', '40px']}>
                    🚀
                </Text>
            </Link>
            <StyledNav>
                <Link href="/projects">
                    <Text _hover={{ textDecoration: 'none' }} fontSize={['13px', '15px', '16px']}>
                        {`<`}
                        <TextComponent>Projects</TextComponent>
                        {` />`}
                    </Text>
                </Link>
                <Link href="/me">
                    <Text _hover={{ textDecoration: 'none' }} fontSize={['13px', '15px', '16px']}>
                        {`<`}
                        <TextComponent>AboutMe</TextComponent>
                        {` />`}
                    </Text>
                </Link>
                <Link href="/contact">
                    <Text _hover={{ textDecoration: 'none' }} fontSize={['13px', '15px', '16px']}>
                        {`<`}
                        <TextComponent>Contact</TextComponent>
                        {` />`}
                    </Text>
                </Link>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header
