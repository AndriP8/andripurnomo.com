import { getBlogs } from "@lib/data";
import { formatDate } from "@lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Blog",
} satisfies Metadata;

export default async function Page() {
  const blogs = await getBlogs();

  return (
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
        <div className="w-full md:w-auto bg-white border-2 border-black p-1 shadow-hard-sm">
          <input
            type="text"
            placeholder="SEARCH_LOGS..."
            className="w-full md:w-64 bg-gray-100 border border-black px-3 py-2 font-mono text-sm focus:outline-none focus:bg-accent-pink placeholder-gray-500"
          />
        </div>
      </header>

      {/* Archive Table */}
      <section className="bg-bg-card border-2 border-black shadow-hard mb-12">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[120px_1fr_120px] gap-4 p-4 border-b-2 border-black bg-gray-100 font-bold text-xs uppercase tracking-wider">
          <div>Date</div>
          <div>Title / Topic</div>
          <div className="text-right">Read Time</div>
        </div>

        {/* Posts */}
        {blogs.map((blog, index) => {
          const colors = [
            "hover:bg-accent-blue",
            "hover:bg-accent-pink",
            "hover:bg-accent-yellow",
            "hover:bg-gray-200",
          ];
          const colorClass = colors[index % colors.length];
          const isLast = index === blogs.length - 1;

          return (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className={`grid grid-cols-1 md:grid-cols-[120px_1fr_120px] gap-2 md:gap-4 p-4 ${
                !isLast ? "border-b-2 border-black" : ""
              } ${colorClass} transition-colors items-center group`}
            >
              <div className="font-mono text-xs text-gray-500 group-hover:text-black">
                {formatDate(blog.createdAt)}
              </div>
              <div className="font-bold text-lg md:text-base group-hover:translate-x-2 transition-transform">
                {blog.title}
              </div>
              <div className="hidden md:block text-right text-xs font-mono">
                {blog.timeToRead} MIN
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
