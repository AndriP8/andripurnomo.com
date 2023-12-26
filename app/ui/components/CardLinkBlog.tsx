import { Blog } from '@lib/types';
import { formatDate } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { Dots } from './Dots';

type CardLinkBlogProps = {
  blog: {
    slug: string;
    entry: Blog;
  };
};

export const CardLinkBlog = ({ blog }: CardLinkBlogProps) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="wrapper-link-blog">
      <div>
        <Image
          src={`/images/blogs/${blog.slug}/cover/resource.jpg`}
          alt={blog.entry.cover.alt}
          className="w-full h-[450px] object-cover rounded-xl"
          width={350}
          height={450}
          priority
        />
      </div>
      <div className="my-4">
        <div className="flex items-center justify-start gap-x-2 text-gray-500">
          <p>{formatDate(blog.entry.createdAt)}</p>
          <Dots bgColor="bg-gray-500" />
          <p>{blog.entry.timeToRead} min read</p>
        </div>
        <p className="text-2xl font-medium">{blog.entry.title}</p>
      </div>
    </Link>
  );
};
