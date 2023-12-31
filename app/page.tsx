import { DocumentRenderer } from '@keystatic/core/renderer';
import { getBlogData, getBlogs } from '@lib/data';
import { formatDate } from '@lib/utils';
import { Footer, Navbar } from '@ui/components';
import { CardLinkBlog } from '@ui/components';
import { TwitterEmbed, YouTubeEmbed } from '@ui/components';
import { Dots } from '@ui/components/Dots';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Andri Purnomo',
};

export default async function Page() {
  const blogs = await getBlogs(3);
  const blog = await getBlogData('setup-react-from-scratch');
  if (!blog) {
    // TODO: update error handling
    return <h1>Something went wrong</h1>;
  }

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
      <div className="min-h-[80vh] h-full w-full bg-gray-50 max-w-4xl mx-auto my-28">
        <div className="mx-6 md:mx-0">
          <h1 className="text-4xl font-medium">{blog.title}</h1>
          <div className="mt-1 flex items-center gap-x-2 text-gray-500">
            <p>{formatDate(blog.createdAt)}</p>
            <Dots bgColor="bg-gray-500" />
            <p>{blog.timeToRead} min read</p>
          </div>
          <div className="mt-12">
            <Image
              src={`/images/blogs/${'setup-react-from-scratch'}/cover/resource.jpg`}
              alt={blog.cover?.alt ?? ''}
              width={700}
              height={500}
              className="rounded-md w-full"
              priority
            />
            <div className="flex justify-center mt-2">
              <span>
                Photo by{' '}
                <a
                  href={blog.cover?.ownerLink ?? ''}
                  target="_blank"
                  className="underline"
                >
                  {blog.cover?.owner}
                </a>
              </span>
            </div>
          </div>
          <main className="w-full mt-20 prose max-w-none break-word-blog-content">
            {blog.content ? (
              <DocumentRenderer
                document={await blog.content()}
                componentBlocks={{
                  youtubeEmbed: (props) => (
                    <YouTubeEmbed youtubeLink={props.youtubeLink} />
                  ),
                  twitterEmbed: (props) => {
                    const tweetId = props.tweet
                      .split('/status/')[1]
                      .split('?')[0];

                    return <TwitterEmbed tweetId={tweetId} />;
                  },
                  image: (props) => {
                    return (
                      <Image
                        src={props.src}
                        alt={props.alt}
                        width={props.width}
                        height={props.height}
                        className="w-auto h-auto mx-auto"
                        priority
                      />
                    );
                  },
                }}
              />
            ) : null}
          </main>
        </div>
      </div>
    </>
  );
}
