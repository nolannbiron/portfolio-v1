import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import Link from "next/link";
import {fadeInDown} from "react-animations";
import { Sign, TextComponent } from "../Text";

const animation = keyframes`${fadeInDown}`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
`

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 50px;
    p{
        text-shadow: 0px 0px 10px #FFF;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            span:not(Sign){
                text-decoration: underline;
                text-decoration-color: #5093CE;
                color: #5093CE;
                text-shadow: 0px 0px 10px #5093CE;
            }
        }
    }
    animation: 1s ${animation};
`

const Header = () => {

    return(
        <StyledHeader>
            <Link href="/">
                <Text cursor={"pointer"} fontSize="40px">🚀</Text>
            </Link>
            <StyledNav>
                <Link href="/projects">
                    <Text>
                        {`<`}<TextComponent>Projects</TextComponent>{` />`}
                    </Text>
                </Link>
                <Link href="/me">
                    <Text>
                        {`<`}<TextComponent>AboutMe</TextComponent>{` />`}
                    </Text>
                </Link>
                <Link href="/contact">
                    <Text>
                        {`<`}<TextComponent>Contact</TextComponent>{` />`}
                    </Text>
                </Link>
            </StyledNav>
        </StyledHeader>
    )

}

export default Header;