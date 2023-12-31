import { DocumentRenderer } from '@keystatic/core/renderer';
import { getBlogData, getBlogSlugs } from '@lib/data';
import { formatDate } from '@lib/utils';
import { TwitterEmbed, YouTubeEmbed } from '@ui/components';
import { Dots } from '@ui/components/Dots';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogData(params.slug);

  return {
    title: `${blog?.title} | Andri Purnomo`,
  };
}

export async function generateStaticParams() {
  const blogSlugs = await getBlogSlugs();
  return blogSlugs.map((slug) => {
    slug;
  });
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const blog = await getBlogData(params.slug);
  if (!blog) {
    // TODO: update error handling
    return <h1>Something went wrong</h1>;
  }

  return (
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
            src={`/images/blogs/${params.slug}/cover/resource.jpg`}
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
  );
}
