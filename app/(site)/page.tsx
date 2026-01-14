import { SITE_CONFIG } from "@lib/constants";
import { getBlogs } from "@lib/data";
import { formatDate } from "@lib/utils";
import { JsonLd } from "@ui/components";
import Link from "next/link";
import { ReactNode } from "react";

import { TimeDisplay } from "./TimeDisplay";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
    },
    {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      jobTitle: SITE_CONFIG.author.jobTitle,
      url: SITE_CONFIG.url,
      sameAs: [SITE_CONFIG.author.twitter, SITE_CONFIG.author.github],
    },
  ],
};

type Project = {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  tags?: string[];
  href: string;
  isExternal?: boolean;
  variant: "default" | "full";
  terminalContent?: ReactNode;
};

const PROJECTS: Project[] = [
  {
    category: "Full-Stack",
    categoryColor: "bg-accent-blue",
    title: "CHAT APP",
    description:
      "Real-time messaging with multi-tab sync, consistent message ordering, and offline capabilities. Built to implement system design patterns in practice.",
    tags: ["React", "WebSocket", "IndexedDB", "Node.js", "PostgreSQL"],
    href: "https://chat-app.andripurnomo.com/",
    isExternal: true,
    variant: "default",
  },
  {
    category: "Full-Stack",
    categoryColor: "bg-accent-pink",
    title: "E-COMMERCE",
    description:
      "Complete shopping experience with cart, checkout, Stripe payments, and multi-currency support. Built to implement system design patterns with focus on performance.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    href: "https://e-commerce.andripurnomo.com/",
    isExternal: true,
    variant: "default",
  },
  {
    category: "Content",
    categoryColor: "bg-white",
    title: "TECH BLOG",
    description:
      "Writing about building web applications and how libraries work under the hood. Practical insights, no fluff.",
    href: "/blog",
    isExternal: false,
    variant: "full",
    terminalContent: (
      <>
        &gt; npm run blog
        <br />
        &gt; Building knowledge...
        <br />
        &gt; Sharing experience...
      </>
    ),
  },
];

export default async function Page() {
  const blogs = await getBlogs(3);

  return (
    <>
      <JsonLd data={homeJsonLd} />
      {/* Marquee Banner */}
      <div className="mt-14 border-b-2 border-black bg-black text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content font-sans font-bold uppercase tracking-widest text-sm px-2">
            Full-Stack Engineer /// React /// TypeScript /// Tanstack /// Next.js /// Node.js ///
            PostgreSQL /// Docker /// System Design /// Core Web Vitals /// Full-Stack Engineer ///
            Full-Stack Engineer /// React /// TypeScript /// Tanstack /// Next.js /// Node.js ///
            PostgreSQL /// Docker /// System Design /// Core Web Vitals /// Full-Stack Engineer ///
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-16">
        {/* Hero Section */}
        <header className="mb-24 bg-bg-card border-2 border-black p-8 md:p-12 shadow-hard relative">
          <h1 className="font-sans text-6xl md:text-8xl font-black leading-[0.9] mb-8 uppercase">
            Andri
            <br />
            Purnomo
          </h1>

          <div className="grid md:grid-cols-[2fr_1fr] gap-8 border-t-2 border-black pt-8">
            <p className="text-lg md:text-xl font-bold leading-tight">
              I BUILD END-TO-END. I SHIP FAST. <br />
              PRAGMATIC CODE. REAL OUTCOMES.
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
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target={project.isExternal ? "_blank" : undefined}
                rel={project.isExternal ? "noreferrer noopener" : undefined}
                className={`group neo-card border-2 border-black p-6 shadow-hard ${
                  project.variant === "full"
                    ? "md:col-span-2 bg-accent-yellow flex flex-col md:flex-row gap-8 items-center"
                    : "bg-bg-card flex flex-col h-full"
                }`}
              >
                {project.variant === "default" ? (
                  <>
                    <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
                      <span
                        className={`${project.categoryColor} border-2 border-black px-2 py-1 text-xs font-bold uppercase`}
                      >
                        {project.category}
                      </span>
                      <span className="text-2xl group-hover:rotate-45 transition-transform duration-200">
                        ↗
                      </span>
                    </div>
                    <h3 className="font-sans text-4xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-8 text-sm font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-auto flex gap-2 flex-wrap">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-black px-2 py-1 bg-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1">
                      <div className="border-b-2 border-black border-dashed pb-4 mb-4">
                        <span
                          className={`${project.categoryColor} border-2 border-black px-2 py-1 text-xs font-bold uppercase`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-sans text-4xl font-bold mb-4">{project.title}</h3>
                      <p className="font-medium">{project.description}</p>
                    </div>
                    {project.terminalContent && (
                      <div className="bg-black text-white p-4 font-mono text-xs w-full md:w-64 border-2 border-white md:border-black">
                        {project.terminalContent}
                      </div>
                    )}
                  </>
                )}
              </a>
            ))}
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
            <div className="flex justify-between gap-4 p-4 border-b-2 border-black bg-gray-100 font-bold text-xs uppercase">
              <div>Title</div>
              <div className="text-right">Date</div>
            </div>

            {/* Rows */}
            {blogs.map((blog, index) => {
              const colors = [
                "hover:bg-accent-blue",
                "hover:bg-accent-pink",
                "hover:bg-accent-yellow",
              ];
              const colorClass = colors[index % colors.length];
              const isLast = index === blogs.length - 1;

              return (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className={`flex justify-between items-start md:items-center gap-4 p-4 ${
                    !isLast ? "border-b-2 border-black" : ""
                  } ${colorClass} transition-colors items-center group`}
                >
                  <div className="font-bold group-hover:underline">{blog.title}</div>
                  <div className="text-right text-xs font-mono">{formatDate(blog.createdAt)}</div>
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
