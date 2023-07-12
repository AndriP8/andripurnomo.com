import { Box, Divider, Flex } from '@mantine/core';

import HeaderItem from './HeaderItem';

const Header = () => {
  const page = window.location.pathname;

  return (
    <Box>
      <Flex justify={'start'} align={'center'} gap={35} py={16}>
        <HeaderItem href="/" active={page === '/'}>
          Home
        </HeaderItem>
        <HeaderItem href="/project" active={page === '/project'}>
          Project
        </HeaderItem>
        <HeaderItem href="/about" active={page === '/about'}>
          About
        </HeaderItem>
      </Flex>
      <Divider color="dark.9" />
    </Box>
  );
};

export default Header;
