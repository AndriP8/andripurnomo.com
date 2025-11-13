import { getBlogs } from '@lib/data';
import { formatDate } from '@lib/utils/formatDate';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Andri Purnomo',
  description: 'Explore articles on frontend development, React, TypeScript, and web performance optimization.',
} satisfies Metadata;

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen pt-32 pb-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-[clamp(48px,8vw,80px)] font-black mb-6">
            <span className="gradient-text">All Articles</span>
          </h1>
          <p className="text-xl text-[#888] max-w-2xl">
            Thoughts on frontend development, system design, and building great user experiences.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="blog-card p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-wider">
                <span className="text-[#00ff88] px-3 py-1 bg-[#00ff88]/10 rounded-2xl">
                  Frontend
                </span>
                <span className="text-[#888]">
                  {formatDate(blog.entry.createdAt)}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 leading-tight text-[#e0e0e0] transition-colors duration-300 hover:text-[#00ff88]">
                <Link href={`/blog/${blog.slug}`}>
                  {blog.entry.title}
                </Link>
              </h2>

              <div className="flex-grow mb-5">
                <p className="text-[#888] leading-relaxed line-clamp-3">
                  {blog.entry.title}
                </p>
              </div>

              <div className="flex justify-between items-center pt-5 border-t border-white/10 mt-auto">
                <span className="text-[#888] text-sm">
                  {blog.entry.timeToRead} min read
                </span>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#00ff88] font-medium text-sm hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#888]">No articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
