'use client'

import { Text, useBreakpointValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { keyframes } from '@emotion/react'
import { fadeInUp } from 'react-animations'

const animation = keyframes`${fadeInUp}`

const StyledFooter = styled.footer<{ justifyContent: string }>`
    animation: 1s ${animation};
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    padding: 30px 40px;
    @media (max-width: 900px) {
        flex-direction: column-reverse;
        padding: 30px 15px;
        align-items: center;
        gap: 10px;
    }
`

const FooterNav = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    p {
        cursor: pointer;
        color: #dcddaa;
        text-shadow: 0px 0px 6px #dcddaa;
        &:hover {
            text-decoration: underline;
            text-decoration-color: #5093ce;
            color: #5093ce;
            text-shadow: 0px 0px 6px #5093ce;
            > span {
                color: #5093ce !important;
                text-shadow: 0px 0px 6px #5093ce !important;
            }
        }

        .parenthesis {
            color: white;
            text-shadow: 0px 0px 6px white;
        }

        .code {
            color: #ce9178;
            text-shadow: 0px 0px 6px #ce9178;
        }
    }
`

const Footer = () => {
    return (
        <StyledFooter justifyContent={'space-between'}>
            <Text opacity={0.7}>
                <small>2022 | © {`<NolannBiron />`}</small>
            </Text>
            <FooterNav>
                <a href="https://www.linkedin.com/in/nolann-biron/" rel="noopener noreferrer" target="_blank">
                    <Text fontSize={['13px', '14px', '16px']}>
                        navigate<span className="parenthesis">(</span>
                        <span className="code">&apos;/linkedin&apos;</span>
                        <span className="parenthesis">)</span>
                    </Text>
                </a>
                <a href="https://www.github.com/nolannbiron" rel="noopener noreferrer" target="_blank">
                    <Text fontSize={['13px', '14px', '16px']}>
                        navigate<span className="parenthesis">(</span>
                        <span className="code">&apos;/github&apos;</span>
                        <span className="parenthesis">)</span>
                    </Text>
                </a>
            </FooterNav>
        </StyledFooter>
    )
}

export default Footer
