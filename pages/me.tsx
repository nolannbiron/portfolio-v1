import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { fadeInDown } from "react-animations";
import { keyframes } from '@emotion/react';
import { TextShadow } from '../components/Text';

const Home: NextPage = () => {

  const animation = keyframes`${fadeInDown}`;

  return (
    <>
      <section style={{height: "100%", display: 'flex', alignItems: "center"}}>
          <Container maxW={['100%', '100%', '100%', '55%']}>
            <Flex animation={`1s ${animation}`} mb={5} alignItems="baseline" flexDir="column">
              <TextShadow fontWeight="bold" fontSize={["24px", "27px", "56px"]} color='white' as="h1">A little bit of me</TextShadow>
              <Text mt={5} fontSize={["15px", "18px", "28px"]}>Hello! My name is Nolann, I&apos;m French 🇫🇷, living in Bordeaux 🍷. I enjoy building web and mobile applications since almost 4 years. </Text>
              <Text mt={3} fontSize={["15px", "18px", "28px"]}>My main skill is frontend dev using React, but I&apos;m also a backend dev using Node.JS, NoSQL, Express.</Text>
              <Text mt={3} fontSize={["15px", "18px", "28px"]}>Currently, I&apos;m upgrading from Web2 to Web3 and learning Solidity. I&apos;m very excited about the crypto-revolution going on and want to spend more time on it.</Text>
            </Flex>
          </Container>
      </section>
    </>
  )
}

export default Home
