import { Blog } from '@lib/types';
import { formatDate } from '@lib/utils';
import Link from 'next/link';

type CardLinkBlogProps = {
  blog: {
    slug: string;
    entry: Blog;
  };
  featured?: boolean;
};

export const CardLinkBlog = ({ blog, featured = false }: CardLinkBlogProps) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="block bg-white/[0.02] border border-white/10 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-accent hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group no-underline"
    >
      {/* Gradient top border on hover */}
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-alt -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />

      <div className="flex justify-between items-start mb-4 text-xs uppercase tracking-wider">
        <span className="text-accent px-2.5 py-1 bg-accent/10 rounded-2xl">
          Frontend
        </span>
        <span className="text-text-muted">{formatDate(blog.entry.createdAt)}</span>
      </div>

      <h3
        className={`font-bold mb-4 leading-tight text-text-light transition-colors duration-300 group-hover:text-accent ${
          featured ? 'text-3xl' : 'text-2xl'
        }`}
      >
        {blog.entry.title}
      </h3>

      <div className="flex justify-between items-center pt-5 border-t border-white/10">
        <span className="text-text-muted text-sm">{blog.entry.timeToRead} min read</span>
        <span className="text-accent text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
          Read More →
        </span>
      </div>
    </Link>
  );
};
