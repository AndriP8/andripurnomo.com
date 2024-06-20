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
      <h2 className="text-4xl my-4">List Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <CardLinkBlog key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
