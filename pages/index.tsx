import { Container, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { fadeInLeft } from "react-animations";
import { keyframes } from "@emotion/react";
import { TextShadow } from "../components/Text";

const Home: NextPage = () => {
  const animation = keyframes`${fadeInLeft}`;

  return (
    <>
      <section
        style={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <Container
          maxW={"container.lg"}
          width={["100%", "100%", "100%", "fit-content"]}
        >
          <Flex
            mb={5}
            animation={`1s ${animation}`}
            alignItems="baseline"
            flexDir="column"
          >
            <TextShadow
              fontWeight="bold"
              fontSize={["30px", "30px", "56px"]}
              as="h1"
            >
              Passionate Full-Stack Developer
            </TextShadow>
            <Text mt={3} fontSize={["18px", "18px", "28px"]}>
              Hi there 👋 My name is Nolann and I build some stuff living in the
              web, blockchain or outside.{" "}
            </Text>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Home;
