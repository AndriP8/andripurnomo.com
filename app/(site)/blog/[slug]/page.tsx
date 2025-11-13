import { DocumentRenderer } from '@keystatic/core/renderer';
import { getBlogData, getBlogs, getBlogSlugs } from '@lib/data';
import { formatDate } from '@lib/utils';
import {
  AuthorBio,
  ReadingProgressBar,
  RelatedPosts,
  ShareButtons,
  TwitterEmbed,
  YouTubeEmbed,
} from '@ui/components';
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
    description: blog?.title,
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-[5%]">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Oops! Something went wrong.</h2>
          <p className="text-[#888] mb-6">
            Please refresh the page to try again.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-[#00ff88] text-[#0a0a0a] rounded-full font-semibold hover:-translate-y-1 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const allBlogs = await getBlogs();
  const relatedPosts = allBlogs
    .filter((post) => post.slug !== params.slug)
    .slice(0, 3);

  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://www.andripurnomo.com/blog/${params.slug}`;

  return (
    <>
      <ReadingProgressBar />

      {/* Hero Section */}
      <header
        className="mt-24 pt-20 pb-16 px-[5%] text-center relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
        }}
      >
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="inline-block px-5 py-2 bg-[rgba(0,255,136,0.1)] border border-[#00ff88] rounded-full text-[#00ff88] text-xs uppercase tracking-widest mb-6">
            Frontend
          </span>
          <h1
            className="text-[clamp(32px,5vw,56px)] font-black leading-tight mb-8"
            style={{
              background:
                'linear-gradient(135deg, #e0e0e0 0%, #00ff88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {blog.title}
          </h1>
          <div className="flex justify-center gap-8 flex-wrap text-[#888] text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              />
              <span>Andri Purnomo</span>
            </div>
            <div>{formatDate(blog.createdAt)}</div>
            <div>{blog.timeToRead} min read</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-[5%] pb-20">
        <div className="max-w-[750px] mx-auto">
          {/* Cover Image */}
          {blog.cover && (
            <div className="mb-16">
              <Image
                src={`/images/blogs/${params.slug}/cover/resource.jpg`}
                alt={blog.cover?.alt ?? ''}
                width={750}
                height={500}
                className="rounded-2xl w-full h-auto object-cover"
                priority
              />
              {blog.cover.owner && (
                <p className="text-center mt-4 text-sm text-[#888]">
                  Photo by{' '}
                  <a
                    href={blog.cover?.ownerLink ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff88] hover:underline"
                  >
                    {blog.cover.owner}
                  </a>
                </p>
              )}
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-invert max-w-none prose-headings:text-[#e0e0e0] prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-[#e0e0e0]/90 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#00ff88] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#e0e0e0] prose-strong:font-semibold prose-code:text-[#00ff88] prose-code:bg-[#1a1a1a] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-[rgba(0,255,136,0.2)] prose-pre:rounded-xl prose-ul:text-[#e0e0e0]/90 prose-ol:text-[#e0e0e0]/90 prose-li:text-lg prose-li:leading-relaxed prose-li:mb-3">
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
                        className="w-auto h-auto mx-auto rounded-xl"
                        priority
                      />
                    );
                  },
                }}
              />
            ) : null}
          </article>

          {/* Share Section */}
          <ShareButtons title={blog.title} url={currentUrl} />

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />

          {/* Author Bio */}
          <AuthorBio />
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
