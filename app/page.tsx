import { getBlogs } from '@lib/data';
import { Footer, Navbar } from '@ui/components';
import { CardLinkBlog } from '@ui/components';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Andri Purnomo',
};

export default async function Page() {
  const blogs = await getBlogs(3);

  return (
    <>
      <Navbar />
      <main className="space-content">
        <div className="flex flex-col gap-y-28 my-28">
          <div className="prose max-w-none">
            <h1 className="text-4xl">Hi, Im Andri Purnomo</h1>
            <p className="text-lg">
              Someone who is very interested in frontend development since late
              2020. I am currently working as Frontend Engineer, my main tech
              stack is React and Typescript, but I also learned other things
              like Chakra UI, Mantine as a UI library, Xstate as a Finite state
              machine, and Advanced React pattern. Now I am curious about how to
              maintain an extensive website because for that I am interested
              learn about performance
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between my-4">
              <h3 className="text-2xl">Latest Blog</h3>
              <Link href="/blog" className="hover:underline">
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              {blogs.map((blog) => (
                <CardLinkBlog key={blog.entry.title} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
