import { Box } from '@chakra-ui/react';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Box minHeight="100vh" bgColor="gray.200" paddingInline="15vw">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
