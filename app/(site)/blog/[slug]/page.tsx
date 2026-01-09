import { SITE_CONFIG } from "@lib/constants";
import { getBlogData, getBlogSlugs } from "@lib/data/blog";
import { formatDate } from "@lib/utils";
import rehypeShiki from "@shikijs/rehype";
import { JsonLd, TwitterEmbed, YouTubeEmbed } from "@ui/components";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [SITE_CONFIG.author.name],
      // TODO: Update blog cover
      images: blog.cover.resource.startsWith("http")
        ? blog.cover.resource
        : `${SITE_CONFIG.url}/images/blogs/${params.slug}/${blog.cover.resource}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.cover.resource.startsWith("http")
        ? blog.cover.resource
        : `${SITE_CONFIG.url}/images/blogs/${params.slug}/${blog.cover.resource}`,
    },
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const blog = await getBlogData(params.slug);

  const blogJsonLd = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        datePublished: blog.createdAt,
        dateModified: blog.updatedAt || blog.createdAt,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author.name,
          url: SITE_CONFIG.url,
        },
        publisher: {
          "@type": "Person",
          name: SITE_CONFIG.author.name,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_CONFIG.url}/blog/${params.slug}`,
        },
      }
    : null;

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-24">
      {blog ? (
        <>
          {blogJsonLd && <JsonLd data={blogJsonLd} />}
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold hover:bg-black hover:text-white px-4 py-2 border-2 border-black shadow-hard-sm hover:shadow-none transition-all bg-white"
            >
              <span>&lt;-</span> BACK TO HOME
            </Link>
          </div>

          {/* Article Container ("The Folder") */}
          <article className="relative bg-bg-card border-2 border-black shadow-hard">
            {/* Top "Tab" */}
            <div className="absolute -top-11 left-[-2px] bg-accent-pink border-2 border-black border-b-0 h-12 px-6 flex items-center font-bold font-mono text-sm z-10">
              BLOG_POST
            </div>

            {/* Article Header */}
            <div className="p-8 md:p-12 border-b-2 border-black bg-white relative z-20">
              <h1 className="font-sans text-4xl md:text-6xl font-black leading-[0.95] mb-8 uppercase">
                {blog.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-gray-500 pt-6 border-t-2 border-dashed border-black">
                <div>
                  PUBLISHED:{" "}
                  <span className="text-black font-bold">
                    {formatDate(blog.createdAt).toUpperCase()}
                  </span>
                </div>
                <div>
                  READ TIME:{" "}
                  <span className="text-black font-bold">{blog.timeToRead} MIN READ</span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-8 md:p-12 prose max-w-none bg-white font-sans text-black break-word-blog-content">
              {blog.content ? (
                <MDXRemote
                  source={blog.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                        [rehypeShiki, { theme: "github-dark" }],
                      ],
                    },
                  }}
                  components={{
                    YouTubeEmbed: (props: any) => <YouTubeEmbed youtubeLink={props.youtubeLink} />,
                    TwitterEmbed: (props: any) => {
                      const tweetId = props.tweet.split("/status/")[1].split("?")[0];
                      return <TwitterEmbed tweetId={tweetId} />;
                    },
                    Image: (props: any) => {
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
            </div>

            {/* Footer / Author Box */}
            <div className="border-t-2 border-black bg-bg-main p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-black border-2 border-white shadow-hard shrink-0 flex items-center justify-center text-white font-bold text-2xl">
                  AP
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">WRITTEN BY ANDRI PURNOMO</h3>
                  <p className="font-mono text-sm mb-4 max-w-lg">
                    Frontend Engineer specializing in React, TypeScript, and NextJS. Passionate
                    about building performant web applications and sharing knowledge.
                  </p>
                  <a
                    href="https://twitter.com/Andrii_purnomo"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-bold underline hover:bg-black hover:text-white"
                  >
                    FOLLOW ON TWITTER -&gt;
                  </a>
                </div>
              </div>
            </div>
          </article>
        </>
      ) : (
        <div className="max-w-lg mx-auto bg-bg-card border-2 border-black p-8 shadow-hard">
          <h2 className="font-sans text-3xl font-bold mb-4">OOPS! SOMETHING WENT WRONG.</h2>
          <p>Please refresh the page to try again.</p>
        </div>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
