import { Text, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { keyframes } from '@emotion/react';
import {fadeInUp} from "react-animations";

const animation = keyframes`${fadeInUp}`;

const StyledFooter = styled.footer<{ justifyContent: string }>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    padding: 30px 40px;
`

const FooterNav = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    p{
        cursor: pointer;
        color: #DCDDAA;
        text-shadow: 0px 0px 6px #DCDDAA;
        &:hover{
            text-decoration: underline;
            text-decoration-color: #5093CE;
            color: #5093CE;
            text-shadow: 0px 0px 6px #5093CE;
            >span{
                color: #5093CE !important;
                text-shadow: 0px 0px 6px #5093CE !important;
            }
        }

        .parenthesis{
            color: white;
            text-shadow: 0px 0px 6px white;
        }

        .code{
            color: #CE9178;
            text-shadow: 0px 0px 6px #CE9178;
        }
    }
    animation: 1s ${animation};
`

const Footer = () => {

    const content = useBreakpointValue({ base: 'center', lg: 'flex-end' })

    return(
        <StyledFooter justifyContent={content ?? 'flex-end'}>
            <FooterNav>
                <a href="https://www.linkedin.com/in/nolann-biron/" rel="noopener noreferrer" target="_blank">
                    <Text fontSize={["13px", "14px", "16px"]}>
                        navigate<span className="parenthesis">(</span><span className="code">&apos;/linkedin&apos;</span><span className="parenthesis">)</span>
                    </Text>
                </a>
                <a href="https://www.github.com/nolannbiron" rel="noopener noreferrer" target="_blank">
                    <Text fontSize={["13px", "14px", "16px"]}>
                        navigate<span className="parenthesis">(</span><span className="code">&apos;/github&apos;</span><span className="parenthesis">)</span>
                    </Text>
                </a>
            </FooterNav>
        </StyledFooter>
    )
}

export default Footer;