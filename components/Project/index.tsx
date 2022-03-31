import { Box, Flex, Tag, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { TextImport, TextShadow, TextString, TextVariable } from "../Text";
import {AiFillGithub} from 'react-icons/ai';
import {useRouter} from 'next/router';
import {FiExternalLink} from 'react-icons/fi';
import { IconType } from "react-icons";

export interface ProjectProps {
    title: string,
    description: string,
    keywords: string[],
    github?: string,
    website?: string
}

const ProjectLink = ({Icon, href}: {Icon: IconType, href: string}) => {
    const theme = useTheme();
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon color={theme.colors.code.function} size={25} />
        </a>
    )
}

const Project = ({ title, description, keywords, github, website}: ProjectProps) => {
    const router = useRouter()
    const theme = useTheme();

    return (
        <>
            <Box mb={6}>
                <Flex alignItems="center" gap={3}>
                    <Text fontWeight="bold" fontSize={['20px', "20px", '28px']}>{title}</Text>
                    {github &&
                        <ProjectLink Icon={AiFillGithub} href={github} />
                    }
                    {website && 
                        <ProjectLink Icon={FiExternalLink} href={website} />
                    }
                </Flex>
                <Text fontSize={['16px', "22px"]}>{description}</Text>
                <Flex wrap='wrap' mt={3} gap={3}>
                    {keywords.map((keyword, index) => (
                        <Tag fontSize={["12px", "13px", "16px"]} key={`tag-${title}-${index}`} color="white" boxShadow={`0 0 10px ${theme.colors.code.component}`} bg={theme.colors.code.component} variant="subtle">#{keyword}</Tag>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default Project;