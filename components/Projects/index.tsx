import { Flex } from "@chakra-ui/react";
import React from "react";
import Project, { ProjectProps } from "../Project";
import { keyframes } from "@emotion/react";
import { fadeInUp } from "react-animations";

interface Props{
    projects: ProjectProps[]
}

const ProjectsWrapper = ({projects}: Props) => {

    const animation = keyframes`${fadeInUp}`;

    return(
        <Flex animation={`1s ${animation}`} direction="column" pt={5} gap={4}>
            {projects.map((project, index) => (
                <Project
                    key={`project-${index}`}
                    title={project.title}
                    description={project.description}
                    keywords={project.keywords} 
                    website={project.website ?? undefined}
                    github={project.github ?? undefined}
                />
            ))}
        </Flex>
    )

}

export default ProjectsWrapper;
