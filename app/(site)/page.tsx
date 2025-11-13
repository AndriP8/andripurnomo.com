import { getBlogs } from '@lib/data';
import { formatDate } from '@lib/utils/formatDate';
import { FloatingShapes } from '@ui/components/FloatingShapes';
import { Metadata } from 'next';
import Link from 'next/link';

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
  const blogs = await getBlogs(4);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative px-[5%]">
        <FloatingShapes />
        <div className="w-full max-w-[1400px] mx-auto relative z-10">
          <h1 className="font-black leading-[0.9] mb-8">
            <span className="block text-[clamp(60px,10vw,140px)] opacity-0 -translate-x-5 animate-[slideIn_0.8s_ease_forwards]">
              Creative
            </span>
            <span
              className="block text-[clamp(60px,10vw,140px)] opacity-0 translate-x-5 animate-[slideIn_0.8s_ease_0.2s_forwards]"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #e0e0e0',
              }}
            >
              Frontend
            </span>
            <span className="block text-[clamp(60px,10vw,140px)] gradient-text opacity-0 translate-y-5 animate-[slideUp_0.8s_ease_0.4s_forwards]">
              Engineer
            </span>
          </h1>
          <p className="text-lg text-[#888] mb-10 tracking-[2px] uppercase opacity-0 animate-[fadeIn_1s_ease_0.6s_forwards]">
            Building <span className="text-[#00ff88]">Beautiful</span> Digital
            Experiences
          </p>
          <Link
            href="#projects"
            className="inline-block px-10 py-5 bg-[#00ff88] text-[#0a0a0a] rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards]"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-[5%] relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-[#00ff88]">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-[#888] mb-5">
              I&apos;m a passionate Frontend Engineer with 3+ years of experience
              crafting exceptional web experiences. I specialize in building
              performant, accessible, and visually stunning applications that
              delight users and drive business results.
            </p>
            <p className="text-lg leading-relaxed text-[#888]">
              Currently focused on modern JavaScript frameworks, system design,
              and creating seamless user experiences that bridge the gap between
              design and development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="skill-card p-5">
              <h3 className="text-xl mb-3 text-[#00ff88]">Frontend</h3>
              <p className="text-sm text-[#888]">
                React, Next.js, TypeScript, Vue.js
              </p>
            </div>
            <div className="skill-card p-5">
              <h3 className="text-xl mb-3 text-[#00ff88]">Design</h3>
              <p className="text-sm text-[#888]">
                UI/UX, Responsive Design, Animation
              </p>
            </div>
            <div className="skill-card p-5">
              <h3 className="text-xl mb-3 text-[#00ff88]">Tools</h3>
              <p className="text-sm text-[#888]">
                Git, Webpack, Docker, CI/CD
              </p>
            </div>
            <div className="skill-card p-5">
              <h3 className="text-xl mb-3 text-[#00ff88]">Backend</h3>
              <p className="text-sm text-[#888]">
                Node.js, REST APIs, GraphQL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 px-[5%]"
        style={{
          background:
            'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-16 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-[#00ff88]">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-10">
            {/* Project 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:bg-white/[0.04]">
              <div>
                <h3 className="text-3xl mb-4">E-Commerce Platform</h3>
                <p className="text-[#888] mb-5 leading-relaxed">
                  A modern e-commerce solution built with Next.js and Stripe
                  integration. Features include real-time inventory management,
                  advanced filtering, and seamless checkout experience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Next.js
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    TypeScript
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Stripe
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Tailwind
                  </span>
                </div>
              </div>
              <div
                className="h-64 rounded-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              />
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:bg-white/[0.04]">
              <div className="order-2 md:order-1">
                <div
                  className="h-64 rounded-2xl relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl mb-4">Real-Time Chat Application</h3>
                <p className="text-[#888] mb-5 leading-relaxed">
                  Advanced chat system with offline support, message queuing,
                  and cross-tab synchronization. Built to handle thousands of
                  concurrent users with WebSocket technology.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    React
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    WebSocket
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Node.js
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:bg-white/[0.04]">
              <div>
                <h3 className="text-3xl mb-4">Analytics Dashboard</h3>
                <p className="text-[#888] mb-5 leading-relaxed">
                  Interactive data visualization dashboard for business
                  intelligence. Features complex charts, real-time updates, and
                  customizable reporting tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Vue.js
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    D3.js
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    Python
                  </span>
                  <span className="px-4 py-1 bg-[#00ff88]/10 border border-[#00ff88] rounded-full text-xs text-[#00ff88]">
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div
                className="h-64 rounded-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-32 px-[5%]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(123, 63, 242, 0.03) 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#00ff88]">
              Latest Thoughts
            </h2>
            <p className="text-lg text-[#888] mt-8">
              Exploring code, design, and everything in between
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogs.map((blog, index) => {
              const isFeatured = index === 0;
              return (
                <article
                  key={blog.entry.title}
                  className={`blog-card p-8 flex flex-col ${isFeatured ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-wider">
                    <span className="text-[#00ff88] px-3 py-1 bg-[#00ff88]/10 rounded-2xl">
                      Frontend
                    </span>
                    <span className="text-[#888]">
                      {formatDate(blog.entry.createdAt)}
                    </span>
                  </div>
                  <h3
                    className={`font-bold mb-4 leading-tight text-[#e0e0e0] transition-colors duration-300 hover:text-[#00ff88] ${isFeatured ? 'text-3xl' : 'text-2xl'}`}
                  >
                    <Link href={`/blog/${blog.slug}`}>{blog.entry.title}</Link>
                  </h3>
                  <div className="flex-grow mb-5">
                    <p className="text-[#888] leading-relaxed line-clamp-3">
                      {blog.entry.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-white/10">
                    <span className="text-[#888] text-sm">
                      {blog.entry.timeToRead} min read
                    </span>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-[#00ff88] font-medium text-sm hover:translate-x-1 transition-transform duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-10 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full font-semibold transition-all duration-300 hover:bg-[#00ff88] hover:text-[#0a0a0a] relative overflow-hidden group"
            >
              <span className="relative z-10">View All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-[5%] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(40px,5vw,60px)] font-extrabold mb-8">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-lg text-[#888] mb-10 leading-relaxed">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:contact@andripurnomo.com"
              className="px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full transition-all duration-300 hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 font-medium"
            >
              Email Me
            </a>
            <a
              href="https://github.com/andripurnomo"
              className="px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full transition-all duration-300 hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/andripurnomo"
              className="px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-full transition-all duration-300 hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
