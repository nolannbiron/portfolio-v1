import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex flexDir="column" height="100vh">
      <Header />
      <Box flex="1 0 auto">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
