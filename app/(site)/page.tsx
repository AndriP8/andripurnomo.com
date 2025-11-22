import { getBlogs } from '@lib/data';
import { formatDate } from '@lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { TimeDisplay } from './TimeDisplay';

export const metadata = {
  description:
    "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
  keywords: [
    'Andri Purnomo',
    'Frontend Engineer',
    'Frontend blogs',
    'Frontend articles',
  ],
  authors: [{ name: 'Andri Purnomo' }],
  alternates: {
    canonical: '/',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/favicons/16x16.png.png',
      sizes: '180x180',
    },
  ],

  openGraph: {
    title: 'Andri Purnomo',
    siteName: 'Andri Purnomo',
    description:
      "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
    url: 'https://www.andripurnomo.com',
    images:
      'https://res.cloudinary.com/dutqd1aca/image/upload/v1718890839/personal/l5uomtofb9mlblxyg035.jpg',
  },
  twitter: {
    title: 'Andri Purnomo',
    description:
      "I'm a Frontend Engineer sharing knowledge on modern frontend development. Explore my home page for a glimpse into my work and delve into the blog for in-depth articles on frontend development.",
    site: 'https://www.andripurnomo.com',
    images:
      'https://res.cloudinary.com/dutqd1aca/image/upload/v1718890839/personal/l5uomtofb9mlblxyg035.jpg',
  },
} satisfies Metadata;

export default async function Page() {
  const blogs = await getBlogs(3);

  return (
    <>
      {/* Marquee Banner */}
      <div className="mt-14 border-b-2 border-black bg-black text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content font-sans font-bold uppercase tracking-widest text-sm">
            Software Engineer /// Frontend Developer /// React /// TypeScript /// NextJS /// Open Source
            /// Design Systems /// Software Engineer /// Frontend Developer /// React /// TypeScript ///
            NextJS /// Open Source /// Design Systems ///
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-16">
        {/* Hero Section */}
        <header className="mb-24 bg-bg-card border-2 border-black p-8 md:p-12 shadow-hard relative">
          {/* Decorative Badge */}
          <div className="absolute -top-5 -right-5 bg-accent-pink border-2 border-black px-4 py-2 font-bold rotate-6 shadow-hard-sm">
            AVAILABLE NOW
          </div>

          <h1 className="font-sans text-6xl md:text-8xl font-black leading-[0.9] mb-8 uppercase">
            Andri<br />Purnomo
          </h1>

          <div className="grid md:grid-cols-[2fr_1fr] gap-8 border-t-2 border-black pt-8">
            <p className="text-lg md:text-xl font-bold leading-tight">
              I BUILD DIGITAL PRODUCTS THAT WORK. <br />
              NO FLUFF, JUST CODE.
            </p>
            <div className="text-sm space-y-2">
              <p>Based in Indonesia</p>
              <p>
                Local Time: <TimeDisplay />
              </p>
              <p className="text-gray-500">Scroll down for data ↓</p>
            </div>
          </div>
        </header>

        {/* Work Section */}
        <section id="work" className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="bg-black text-white px-4 py-2 text-2xl font-bold inline-block transform -rotate-2">
              SELECTED_WORK
            </h2>
            <div className="h-1 flex-grow bg-black ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <a
              href="https://github.com/andrip8"
              target="_blank"
              rel="noreferrer noopener"
              className="group neo-card bg-bg-card border-2 border-black p-6 shadow-hard flex flex-col h-full"
            >
              <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
                <span className="bg-accent-blue border-2 border-black px-2 py-1 text-xs font-bold uppercase">
                  Frontend
                </span>
                <span className="text-2xl group-hover:rotate-45 transition-transform duration-200">↗</span>
              </div>
              <h3 className="font-sans text-4xl font-bold mb-2">WEB APPS</h3>
              <p className="mb-8 text-sm font-medium leading-relaxed">
                Building performant and scalable web applications using modern frontend technologies and best practices.
              </p>
              <div className="mt-auto flex gap-2 flex-wrap">
                <span className="text-xs border border-black px-2 py-1 bg-gray-100">React</span>
                <span className="text-xs border border-black px-2 py-1 bg-gray-100">TypeScript</span>
                <span className="text-xs border border-black px-2 py-1 bg-gray-100">Next.js</span>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://github.com/andrip8"
              target="_blank"
              rel="noreferrer noopener"
              className="group neo-card bg-bg-card border-2 border-black p-6 shadow-hard flex flex-col h-full"
            >
              <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
                <span className="bg-accent-pink border-2 border-black px-2 py-1 text-xs font-bold uppercase">
                  Development
                </span>
                <span className="text-2xl group-hover:rotate-45 transition-transform duration-200">↗</span>
              </div>
              <h3 className="font-sans text-4xl font-bold mb-2">OPEN SOURCE</h3>
              <p className="mb-8 text-sm font-medium leading-relaxed">
                Contributing to open source projects and sharing knowledge with the developer community.
              </p>
              <div className="mt-auto flex gap-2 flex-wrap">
                <span className="text-xs border border-black px-2 py-1 bg-gray-100">GitHub</span>
                <span className="text-xs border border-black px-2 py-1 bg-gray-100">Collaboration</span>
              </div>
            </a>

            {/* Project 3 (Full Width) */}
            <a
              href="/blog"
              className="group neo-card md:col-span-2 bg-accent-yellow border-2 border-black p-6 shadow-hard flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <div className="border-b-2 border-black border-dashed pb-4 mb-4">
                  <span className="bg-white border-2 border-black px-2 py-1 text-xs font-bold uppercase">
                    Content
                  </span>
                </div>
                <h3 className="font-sans text-4xl font-bold mb-4">TECH BLOG</h3>
                <p className="font-medium">
                  Writing about frontend development, performance optimization, and modern web technologies.
                </p>
              </div>
              <div className="bg-black text-white p-4 font-mono text-xs w-full md:w-64 border-2 border-white md:border-black">
                &gt; npm run blog<br />
                &gt; Building knowledge...<br />
                &gt; Sharing experience...
              </div>
            </a>
          </div>
        </section>

        {/* Writing Section (Table Style) */}
        <section id="writing" className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="bg-black text-white px-4 py-2 text-2xl font-bold inline-block transform rotate-1">
              LOGS / THOUGHTS
            </h2>
            <div className="h-1 flex-grow bg-black ml-4"></div>
          </div>

          <div className="bg-bg-card border-2 border-black shadow-hard">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] gap-4 p-4 border-b-2 border-black bg-gray-100 font-bold text-xs uppercase">
              <div>Title</div>
              <div className="text-right">Date</div>
            </div>

            {/* Rows */}
            {blogs.map((blog, index) => {
              const colors = ['hover:bg-accent-blue', 'hover:bg-accent-pink', 'hover:bg-accent-yellow'];
              const colorClass = colors[index % colors.length];
              const isLast = index === blogs.length - 1;

              return (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] gap-4 p-4 ${
                    !isLast ? 'border-b-2 border-black' : ''
                  } ${colorClass} transition-colors items-center group`}
                >
                  <div className="font-bold group-hover:underline">{blog.entry.title}</div>
                  <div className="text-right text-xs font-mono">
                    {formatDate(blog.entry.createdAt)}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-block border-2 border-black bg-white px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors shadow-hard-sm"
            >
              VIEW ALL POSTS →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
