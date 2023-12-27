import { reader } from './reader';

export async function getBlogData(slug: string) {
  const blogData = await reader.collections.blogs.read(slug, {
    resolveLinkedFiles: true,
  });
  return blogData;
}

export const getBlogs = async (numBlogs = 5) => {
  const blogs = await reader.collections.blogs.all();
  const sortedBlogs = blogs.sort((a, b) => {
    return (
      new Date(b.entry.createdAt).getTime() -
      new Date(a.entry.createdAt).getTime()
    );
  });

  if (numBlogs) {
    return sortedBlogs.slice(0, numBlogs);
  } else {
    return sortedBlogs;
  }
};

export const getBlogSlugs = () => reader.collections.blogs.list();
