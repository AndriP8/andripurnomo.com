import { Box, Divider, Flex } from '@mantine/core';
import { useRouter } from 'next/router';

import HeaderItem from './HeaderItem';

const Header = () => {
  const router = useRouter();
  const page = router.pathname;

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
