import { Box } from '@mantine/core';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Box mih={'100vh'} bg={'gray'} px={'15vw'}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
