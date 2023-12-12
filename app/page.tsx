import HomePage from './ui/content/homePage';
import Layout from './ui/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
};

export default function Page() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
