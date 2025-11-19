import { Blog } from '@lib/types';
import Link from 'next/link';

import { CardLinkBlog } from './CardLinkBlog';

type BlogItem = {
  slug: string;
  entry: Blog;
};

type BlogSectionProps = {
  blogs: BlogItem[];
};

export const BlogSection = ({ blogs }: BlogSectionProps) => {
  return (
    <section
      id="blog"
      className="section-padding"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(123, 63, 242, 0.03) 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-4 inline-block relative pb-6">
            Latest Thoughts
            <span className="absolute bottom-0 left-0 w-[60px] h-1 bg-accent" />
          </h2>
          <p className="text-lg text-text-muted mt-8">
            Exploring code, design, and everything in between
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-10 py-4 border-2 border-accent text-accent rounded-[30px] font-semibold transition-all duration-300 relative overflow-hidden hover:text-primary-dark no-underline group"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-accent transition-all duration-300 -z-10 group-hover:left-0" />
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};
