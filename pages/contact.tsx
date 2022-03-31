import { Container, Flex, Text, useTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import { fadeInDown } from "react-animations";
import { keyframes } from "@emotion/react";
import { TextShadow } from "../components/Text";

const ContactLink = ({ href, name }: { href: string; name: string }) => {
  const theme = useTheme();
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <TextShadow
        isLink
        cursor="pointer"
        fontSize="28px"
        color={theme.colors.code.function}
      >
        {name}
      </TextShadow>
    </a>
  );
};

const ContactPage: NextPage = () => {
  const animation = keyframes`${fadeInDown}`;

  return (
    <>
      <section style={{ height: "100%", display: "flex" }}>
        <Container
          maxW={"container.lg"}
          animation={`1s ${animation}`}
          pt={24}
          width={["100%", "100%", "100%", "fit-content"]}
        >
          <Flex
            animation={`1s ${animation}`}
            mb={5}
            alignItems="baseline"
            flexDir="column"
          >
            <TextShadow
              fontWeight="bold"
              mb={3}
              fontFamily="menlo"
              fontSize="60px"
              as="h1"
            >
              👋🏼
            </TextShadow>
            <TextShadow
              fontWeight="bold"
              fontFamily="menlo"
              fontSize="56px"
              as="h2"
            >
              Say Hello_
            </TextShadow>
            <Text
              opacity={0.7}
              mb={5}
              fontWeight="light"
              fontSize={["16px", "17px", "22px"]}
            >
              Tell me about React, Typescript, Solidity or crypto-currency.
            </Text>
            <ContactLink
              name="github"
              href="https://www.github.com/nolannbiron"
            />
            <ContactLink
              name="linkedin"
              href="https://www.linkedin.com/in/nolann-biron/"
            />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
