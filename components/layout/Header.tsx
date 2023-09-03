import { Box, Divider, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import HeaderItem from './HeaderItem';

const Header = () => {
  const router = useRouter();
  const page = router.pathname;

  return (
    <Box>
      <Flex justify="start" alignItems="center" gap={35} paddingBlock={4}>
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
      <Divider backgroundColor="black" />
    </Box>
  );
};

export default Header;
