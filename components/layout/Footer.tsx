import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer style={{ marginBottom: 82 }}>
      <SimpleGrid justifyContent="center" color="black" rowGap={2}>
        <Text fontWeight="semibold" fontSize={18} textAlign="center">
          Find me on
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="mailto:andri.adrp@gmail.com">
            <HiOutlineMail style={{ fontSize: 32 }} />
          </Link>
          <Link href="https://www.linkedin.com/in/andri-purnomo/">
            <AiOutlineLinkedin style={{ fontSize: 32 }} />
          </Link>
          <Link href="https://twitter.com/andrii_purnomo/">
            <AiOutlineTwitter style={{ fontSize: 32 }} />
          </Link>
          <Link href="https://github.com/andrip8/">
            <AiOutlineGithub style={{ fontSize: 32 }} />
          </Link>
        </Flex>
        <p className="">© Andri Purnomo {yearNow}</p>
      </SimpleGrid>
    </footer>
  );
};

export default Footer;
