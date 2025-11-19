import { getBlogs } from '@lib/data';
import {
  AboutSection,
  BlogSection,
  ContactSection,
  Hero,
  ProjectsSection,
} from '@ui/components';
import { Metadata } from 'next';

export const metadata = {
  description:
    "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
  keywords: [
    'Andri Purnomo',
    'Frontend Engineer',
    'Frontend blogs',
    'Frontend articles',
  ],
  authors: [{ name: 'Andri Purnomo' }],
  alternates: {
    canonical: '/',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/favicons/16x16.png.png',
      sizes: '180x180',
    },
  ],

  openGraph: {
    title: 'Andri Purnomo',
    siteName: 'Andri Purnomo',
    description:
      "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
    url: 'https://www.andripurnomo.com',
    images:
      'https://res.cloudinary.com/dutqd1aca/image/upload/v1718890839/personal/l5uomtofb9mlblxyg035.jpg',
  },
  twitter: {
    title: 'Andri Purnomo',
    description:
      "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
    site: 'https://www.andripurnomo.com',
    images:
      'https://res.cloudinary.com/dutqd1aca/image/upload/v1718890839/personal/l5uomtofb9mlblxyg035.jpg',
  },
} satisfies Metadata;

export default async function Page() {
  const blogs = await getBlogs(3);

  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogSection blogs={blogs} />
      <ContactSection />
    </main>
  );
}
