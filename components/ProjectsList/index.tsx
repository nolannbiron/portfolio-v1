'use client'

import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Project, { ProjectProps } from '../Project'
import { ProjectsList } from '../../assets/projects'
import { TextImport } from '../Text'

interface Props {
    projects: ProjectsList['all'] | ProjectProps[]
}

const ProjectsWrapper = ({ projects }: Props) => {
    if (projects instanceof Array) {
        return (
            <Flex direction="column" pt={5} gap={4}>
                {projects.map((project, index) => (
                    <Project
                        key={`project-${index}`}
                        title={project.title}
                        description={project.description}
                        keywords={project.keywords}
                        website={project.website}
                        github={project.github}
                    />
                ))}
            </Flex>
        )
    } else {
        return (
            <Flex direction="column" pt={5} gap={4}>
                {Object.keys(projects)
                    .sort((a, b) => parseFloat(b) - parseFloat(a))
                    .map((key) => (
                        <>
                            <Text fontWeight="bold" fontSize={['18px', '26px']}>
                                <TextImport>{key}</TextImport>
                            </Text>
                            {projects[key].map((project, index) => (
                                <Project
                                    key={`project-${index}`}
                                    title={project.title}
                                    description={project.description}
                                    keywords={project.keywords}
                                    website={project.website}
                                    github={project.github}
                                />
                            ))}
                        </>
                    ))}
            </Flex>
        )
    }
}

export default ProjectsWrapper
