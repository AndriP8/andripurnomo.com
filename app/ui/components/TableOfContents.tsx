'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the article content
    const articleContent = document.querySelector('.prose-blog');
    if (!articleContent) return;

    const headingElements = articleContent.querySelectorAll('h2, h3');
    const headingData: Heading[] = [];

    headingElements.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      headingData.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1)),
      });
    });

    setHeadings(headingData);

    // Set up intersection observer for active heading tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 1.0,
      }
    );

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
            Table of Contents
          </h3>
          <ul className="space-y-3">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`relative ${
                  heading.level === 3 ? 'pl-5' : ''
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`absolute left-0 w-2 h-2 rounded-full transition-all duration-300 ${
                      activeId === heading.id
                        ? 'bg-accent shadow-lg shadow-accent/50'
                        : 'bg-white/30'
                    }`}
                  />
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`ml-5 text-sm transition-all duration-300 ${
                      activeId === heading.id
                        ? 'text-text-light font-medium'
                        : 'text-text-muted hover:text-accent'
                    }`}
                  >
                    {heading.text}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
