import { Flex } from '@chakra-ui/react';
import Introduction from 'content/homePage/Introduction';
import Project from 'content/homePage/Project';
import Layout from 'layout/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex direction="column" gap={82} mt={82}>
        <Introduction />
        <Project />
      </Flex>
    </Layout>
  );
};

export default Home;
