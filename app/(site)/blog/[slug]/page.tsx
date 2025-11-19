import { DocumentRenderer } from '@keystatic/core/renderer';
import { getBlogData, getBlogSlugs } from '@lib/data';
import { formatDate } from '@lib/utils';
import { TwitterEmbed, YouTubeEmbed } from '@ui/components';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogData(params.slug);

  return {
    title: blog?.title,
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const blog = await getBlogData(params.slug);

  return (
    <div className="min-h-screen w-full">
      {blog ? (
        <>
          {/* Hero Section */}
          <header className="mt-[100px] py-20 md:py-32 text-center relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial animate-pulse-glow pointer-events-none" />

            <div className="max-w-[800px] mx-auto px-5 md:px-8 relative z-10">
              {/* Category Badge */}
              <span className="inline-block px-5 py-2 bg-accent/10 border border-accent rounded-full text-accent text-xs uppercase tracking-wider mb-5">
                Frontend
              </span>

              {/* Blog Title with Gradient */}
              <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] mb-8 bg-gradient-to-r from-text-light to-accent bg-clip-text text-transparent">
                {blog.title}
              </h1>

              {/* Metadata */}
              <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-text-muted text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-accent" />
                  <span>Andri Purnomo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{blog.timeToRead} min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {blog.cover && (
            <div className="max-w-[1200px] mx-auto px-5 md:px-8 mb-16">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={`/images/blogs/${params.slug}/cover/resource.jpg`}
                  alt={blog.cover?.alt ?? ''}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {blog.cover?.owner && (
                <div className="flex justify-center mt-4">
                  <span className="text-sm text-text-muted">
                    Photo by{' '}
                    <a
                      href={blog.cover?.ownerLink ?? ''}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-alt transition-colors duration-200 underline decoration-accent/50 hover:decoration-accent-alt/50"
                    >
                      {blog.cover?.owner}
                    </a>
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          <main className="max-w-[750px] mx-auto px-5 md:px-8 pb-20">
            {/* Article Content */}
            <article className="prose prose-blog max-w-none break-word-blog-content">
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
                          className="w-auto h-auto mx-auto rounded-lg"
                          priority
                        />
                      );
                    },
                  }}
                />
              ) : null}
            </article>
          </main>
        </>
      ) : (
        <div className="max-w-lg mx-auto text-center py-20 mt-[100px]">
          <h2 className="text-3xl font-bold text-text-light mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-text-muted">Please refresh the page to try again.</p>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
