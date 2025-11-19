import { DocumentRenderer } from '@keystatic/core/renderer';
import { getBlogData, getBlogSlugs } from '@lib/data';
import { formatDate } from '@lib/utils';
import { TwitterEmbed, YouTubeEmbed } from '@ui/components';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Floating Decorative Shapes */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent opacity-20 blur-[100px] top-[10%] right-[5%] animate-float" />
      <div
        className="absolute w-[250px] h-[250px] rounded-full bg-accent-alt opacity-20 blur-[100px] bottom-[20%] left-[10%] animate-float"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 lg:px-8 py-24 md:py-32">
        {blog ? (
          <>
            {/* Back to Blog Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors duration-300 mb-12 group no-underline"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span>Back to Blog</span>
            </Link>

            {/* Blog Header */}
            <div className="mb-12">
              <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold leading-tight mb-6 opacity-0 animate-slide-up text-text-light">
                {blog.title}
              </h1>

              {/* Metadata */}
              <div
                className="flex items-center gap-4 text-sm opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                  {formatDate(blog.createdAt)}
                </span>
                <span className="text-text-muted">•</span>
                <span className="text-text-muted">{blog.timeToRead} min read</span>
              </div>
            </div>

            {/* Cover Image */}
            <div
              className="mb-16 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(0,255,136,0.1)]">
                <Image
                  src={`/images/blogs/${params.slug}/cover/resource.jpg`}
                  alt={blog.cover?.alt ?? ''}
                  width={700}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
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

            {/* Blog Content */}
            <article
              className="prose prose-blog max-w-none break-word-blog-content opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
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

            {/* Back to Blog CTA */}
            <div className="mt-20 pt-12 border-t border-white/10 text-center">
              <Link
                href="/blog"
                className="inline-block px-10 py-4 border-2 border-accent text-accent rounded-full font-semibold transition-all duration-300 relative overflow-hidden hover:text-primary-dark no-underline group"
              >
                <span className="absolute top-0 left-[-100%] w-full h-full bg-accent transition-all duration-300 -z-10 group-hover:left-0" />
                Read More Articles
              </Link>
            </div>
          </>
        ) : (
          <div className="max-w-lg mx-auto text-center py-20">
            <h2 className="text-3xl font-bold text-text-light mb-4">
              Oops! Something went wrong.
            </h2>
            <p className="text-text-muted">
              Please refresh the page to try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
