import { reader } from './reader';

export const getBlogs = async (numBlogs = 5) => {
  const blogs = await reader.collections.blogs.all();

  if (numBlogs) {
    return blogs.slice(0, numBlogs);
  } else {
    return blogs;
  }
};
