import { Container, Flex, Heading, useTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import { fadeInUp } from "react-animations";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import ProjectsWrapper from "../components/Projects";
import { projectsList } from "../assets/projects";
import { Constant, TextFunction, TextKey } from "../components/Text";

const StyledHeading = styled(Heading)`
  font-weight: bolder;
  font-family: menlo;
  color: white;
  text-shadow: 0 0 6px white;

  .codeKey {
    color: ${(props: any) => props.theme.colors.code.key};
    text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.key};
  }
  .codeConstant {
    color: ${(props: any) => props.theme.colors.code.constant};
    text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.constant};
  }
  .codeFunction {
    color: ${(props: any) => props.theme.colors.code.function};
    text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.function};
  }
  .codeVar {
    color: ${(props: any) => props.theme.colors.code.variable};
    text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.variable};
  }
  .codeSign {
    color: ${(props: any) => props.theme.colors.code.sign};
    text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.sign};
  }
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
              <span className="codeConstant">⭐️ projects</span>.
              <span className="codeVar">featured</span>
            </StyledHeading>
          </Flex>
          <ProjectsWrapper projects={projectsList.featured} />
          <Flex pt={10} pb={5} alignItems="start" flexDir="column">
            <StyledHeading fontSize={["22px", "26px"]}>
              <span className="codeConstant">projects</span>.
              <span className="codeVar">all</span>
            </StyledHeading>
          </Flex>
          <ProjectsWrapper projects={projectsList.all} />
        </Container>
      </main>
    </>
  );
};

export default ProjectsPage;
