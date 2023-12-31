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
              Passionate about frontend development since 2020, I&lsquo;m
              currently working as a Frontend Engineer. I specialize in React,
              Typescript, and NextJS. Going beyond the basics, I&lsquo;ve
              explored Chakra UI and TailwindCSS for styling, Xstate as a Finite
              State Machine, and delved into Advanced React patterns. Now, my
              focus has shifted towards optimizing performance. It&lsquo;s not
              just about code, it&lsquo;s ensuring fast loading, efficient
              resource use, and a smoother user experience. Unraveling the
              intricacies of maintaining an extensive website is my latest
              exploration.
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
