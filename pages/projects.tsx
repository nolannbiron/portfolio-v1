import { Container, Flex, Text, useTheme } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { fadeInDown, fadeInUp } from "react-animations";
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Project from '../components/Project';
import ProjectsWrapper from '../components/Projects';
import { projectsList } from '../assets/projects';

const Heading = styled.h1<{ fontSize?: string }>`
    font-weight: bolder;
    font-family: menlo;
    font-size: ${props => props.fontSize ? props.fontSize : "46px"};
    color: white;
    text-shadow: 0 0 6px white;

    .codeKey{
        color: ${(props: any)  => props.theme.colors.code.key};
        text-shadow: 0 0 6px ${(props: any)  => props.theme.colors.code.key};
    }
    .codeConstant{
        color: ${(props: any)  => props.theme.colors.code.constant};
        text-shadow: 0 0 6px ${(props: any)  => props.theme.colors.code.constant};
    }
    .codeFunction{
        color: ${(props: any)  => props.theme.colors.code.function};
        text-shadow: 0 0 6px ${(props: any)  => props.theme.colors.code.function};
    }
    .codeVar{
        color: ${(props: any)  => props.theme.colors.code.variable};
        text-shadow: 0 0 6px ${(props: any)  => props.theme.colors.code.variable};
    }
    .codeSign{
        color: ${(props: any)  => props.theme.colors.code.sign};
        text-shadow: 0 0 6px ${(props: any)  => props.theme.colors.code.sign};
    }
`


const ProjectsPage: NextPage = () => {

    const animation = keyframes`${fadeInUp}`;
    const theme = useTheme();

    return (
        <>
            <main style={{height: "100%", display: 'flex'}}>
                <Container animation={`1s ${animation}`} mt={20} minW="65%">
                    <Flex pb={5} alignItems="start" flexDir="column">
                        <Heading><span className='codeKey'>const</span> <span className="codeConstant">projects</span> = <span className="codeFunction">useProjects</span>();</Heading>
                    </Flex>
                    <Flex pt={10} pb={5} alignItems="start" flexDir="column">
                        <Heading fontSize='24px'><span className="codeConstant">⭐️ projects</span>.<span className="codeVar">featured</span></Heading>
                    </Flex>
                    <ProjectsWrapper projects={projectsList.featured} />
                    <Flex pt={10} pb={5} alignItems="start" flexDir="column">
                        <Heading fontSize='24px'><span className="codeConstant">projects</span>.<span className="codeVar">all</span></Heading>
                    </Flex>
                    <ProjectsWrapper projects={projectsList.all} />
                </Container>
            </main>
        </>
    )
}

export default ProjectsPage
