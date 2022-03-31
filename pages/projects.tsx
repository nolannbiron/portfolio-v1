import { Container, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import { fadeInUp } from "react-animations";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import ProjectsWrapper from "../components/ProjectsList";
import { projectsList } from "../assets/projects";
import { Constant, TextFunction, TextKey, TextShadow, TextVariable } from "../components/Text";

const StyledHeading = styled(Heading)`
  font-weight: bolder;
  font-family: menlo;
  color: white;
  text-shadow: 0px 0px 6px white;
`;

const ProjectsPage: NextPage = () => {
  const animation = keyframes`${fadeInUp}`;
  const theme = useTheme();

  return (
    <>
      <main style={{ height: "100%", display: "flex" }}>
        <Container
          maxW={"container.lg"}
          animation={`1s ${animation}`}
          my={[10, 20]}
          width={["100%", "100%", "100%", "fit-content"]}
        >
          <Flex pb={5} alignItems="start" flexDir="column">
            <StyledHeading fontSize={["28px", "34px", "46px"]}>
              <TextKey>const</TextKey> <Constant>projects</Constant> ={" "}
              <TextFunction>useProjects</TextFunction>();
            </StyledHeading>
          </Flex>
          <Flex pt={10} pb={5} alignItems="start" flexDir="column">
            <StyledHeading fontSize={["22px", "26px"]}>      
              <TextFunction>⭐️</TextFunction>        
              <Constant> projects</Constant>.
              <TextVariable>featured</TextVariable>
            </StyledHeading>
          </Flex>
          <ProjectsWrapper projects={projectsList.featured} />
          <Flex pt={10} pb={5} alignItems="start" flexDir="column">
            <StyledHeading fontSize={["22px", "26px"]}>
              <Constant>projects</Constant>.
              <TextVariable>all</TextVariable>
            </StyledHeading>
          </Flex>
          <ProjectsWrapper projects={projectsList.all} />
          <Text my={4} fontSize={['16px', '20px']} textAlign="center"><Constant>More coming soon</Constant> <TextVariable><small>(I&apos;m still adding them)</small></TextVariable></Text>
        </Container>
      </main>
    </>
  );
};

export default ProjectsPage;
