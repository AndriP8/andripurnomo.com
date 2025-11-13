import { formatDate } from '@lib/utils/formatDate';
import Link from 'next/link';

type BlogPost = {
  slug: string;
  entry: {
    title: string;
    createdAt: string | Date;
    timeToRead: number;
  };
};

type RelatedPostsProps = {
  posts: BlogPost[];
};

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:bg-white/[0.04] block"
          >
            <div className="text-[#00ff88] text-xs uppercase mb-3">
              Frontend
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-3 leading-tight hover:text-[#00ff88] transition-colors duration-300">
              {post.entry.title}
            </h3>
            <p className="text-[#888] text-sm">
              {formatDate(
                typeof post.entry.createdAt === 'string'
                  ? post.entry.createdAt
                  : post.entry.createdAt.toISOString()
              )}{' '}
              • {post.entry.timeToRead} min read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
