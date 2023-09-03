import { Box, Flex } from '@chakra-ui/react';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Box minHeight="100vh" bgColor="gray.200" paddingInline="15vw">
      <Header />
      <Flex direction="column" gap={82} marginBlock={82}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default Layout;
