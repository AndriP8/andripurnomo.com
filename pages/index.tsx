import Blog from 'content/homePage/Blog';
import Introduction from 'content/homePage/Introduction';
import Project from 'content/homePage/Project';
import Layout from 'layout/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Project />
      <Blog />
    </Layout>
  );
};

export default Home;
