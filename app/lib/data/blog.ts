import { reader } from './reader';

export async function getBlogData(slug: string) {
  const blogData = await reader.collections.blogs.read(slug, {
    resolveLinkedFiles: true,
  });
  return blogData;
}

export const getBlogs = async (numBlogs = 5) => {
  const blogs = await reader.collections.blogs.all();

  if (numBlogs) {
    return blogs.slice(0, numBlogs);
  } else {
    return blogs;
  }
};

export const getBlogSlugs = () => reader.collections.blogs.list();
