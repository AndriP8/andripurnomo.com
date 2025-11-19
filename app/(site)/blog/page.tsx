import { getBlogs } from '@lib/data';
import { CardLinkBlog } from '@ui/components';
import { Metadata } from 'next';

export const metadata = {
  title: 'Blog',
} satisfies Metadata;

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <div className="space-content my-28">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-4 relative inline-block pb-6">
          All Articles
          <span className="absolute bottom-0 left-0 w-[60px] h-1 bg-accent" />
        </h1>
        <p className="text-lg text-text-muted mb-16">
          Exploring code, design, and everything in between
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              className={
                index === 0
                  ? 'md:col-span-2 bg-gradient-to-br from-accent/5 to-accent-alt/5 border-accent/20 rounded-[20px]'
                  : ''
              }
            >
              <CardLinkBlog blog={blog} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
