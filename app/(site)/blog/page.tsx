import { SITE_CONFIG } from "@lib/constants";
import { getBlogs } from "@lib/data";
import { formatDate } from "@lib/utils";
import { BlogSearch } from "@ui/blog/BlogSearch";
import { BlogTags } from "@ui/blog/BlogTags";
import { ClearFilters } from "@ui/blog/ClearFilters";
import { JsonLd } from "@ui/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  // TODO: Update description
  description:
    "Explore articles on frontend development, React, TypeScript, Next.js, and modern web technologies by Andri Purnomo.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Explore articles on frontend development, React, TypeScript, Next.js, and modern web technologies.",
    url: `${SITE_CONFIG.url}/blog`,
  },
  twitter: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Explore articles on frontend development, React, TypeScript, Next.js, and modern web technologies.",
  },
} satisfies Metadata;

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog",
  // TODO: Update description
  description: "Articles on frontend development, React, TypeScript, and modern web technologies.",
  url: `${SITE_CONFIG.url}/blog`,
};

interface PageProps {
  searchParams: Promise<{ q?: string; tag?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const blogs = await getBlogs(undefined, params.q, params.tag);

  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags))).sort();

  return (
    <>
      <JsonLd data={blogListJsonLd} />
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-28 pb-24">
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold mb-4 transform -rotate-2">
              DATABASE_ACCESS
            </div>
            <h1 className="font-sans text-5xl md:text-7xl font-black uppercase leading-[0.9]">
              Writing
              <br />
              Archive
            </h1>
          </div>

          {/* Search Filter */}
          <BlogSearch />
        </header>

        {/* Active Filters */}
        {(params.q || params.tag) && (
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-mono text-gray-600">Active filters:</span>
            {params.q && (
              <span className="px-2 py-1 bg-accent-pink border border-black text-xs font-mono">
                Search: &quot;{params.q}&quot;
              </span>
            )}
            {params.tag &&
              params.tag.split(",").map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent-blue border border-black text-xs font-mono"
                >
                  Tag: #{tag}
                </span>
              ))}
            <ClearFilters />
          </div>
        )}

        {/* Tag Filter */}
        {allTags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-mono font-bold mb-3 uppercase">Filter by tag:</h2>
            <BlogTags tags={allTags} />
          </div>
        )}

        {/* Archive Table */}
        <section className="bg-bg-card border-2 border-black shadow-hard mb-12">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[120px_1fr_120px] gap-4 p-4 border-b-2 border-black bg-gray-100 font-bold text-xs uppercase tracking-wider">
            <div>Date</div>
            <div>Title / Topic</div>
            <div className="text-right">Read Time</div>
          </div>

          {/* Posts */}
          {blogs.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-mono text-gray-500">No blogs found matching your filters.</p>
            </div>
          ) : (
            blogs.map((blog, index) => {
              const colors = [
                "hover:bg-accent-blue",
                "hover:bg-accent-pink",
                "hover:bg-accent-yellow",
                "hover:bg-gray-200",
              ];
              const colorClass = colors[index % colors.length];
              const isLast = index === blogs.length - 1;

              return (
                <div
                  key={blog.slug}
                  className={`grid grid-cols-1 md:grid-cols-[120px_1fr_120px] gap-2 md:gap-4 p-4 ${
                    !isLast ? "border-b-2 border-black" : ""
                  }`}
                >
                  <div className="font-mono text-xs text-gray-500">
                    {formatDate(blog.createdAt)}
                  </div>
                  <div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className={`font-bold text-lg md:text-base ${colorClass} transition-all inline-block group-hover:translate-x-2`}
                    >
                      {blog.title}
                    </Link>
                    {blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 text-[10px] font-mono bg-gray-100 border border-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block text-right text-xs font-mono">
                    {blog.timeToRead} MIN
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
