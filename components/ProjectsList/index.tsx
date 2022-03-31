import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Project, { ProjectProps } from "../Project";
import { keyframes } from "@emotion/react";
import { fadeInUp } from "react-animations";
import { ProjectsList } from "../../assets/projects";
import { TextImport, TextShadow } from "../Text";

interface Props {
  projects: ProjectsList['all'] | ProjectProps[];
  withDate?: boolean;
}

const ProjectsWrapper = ({ projects, withDate }: Props) => {
  const animation = keyframes`${fadeInUp}`;

  if(projects instanceof Array){
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
    );
  }else{

  return(
      <Flex direction="column" pt={5} gap={4}>
          {Object.keys(projects).map((key) => (
            <>
              <Text fontWeight="bold" fontSize={['18px', "24px"]}><TextImport>{key}</TextImport></Text>
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
};

export default ProjectsWrapper;
