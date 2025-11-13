'use client';

import { useEffect, useState } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  headings: Heading[];
};

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-24">
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <h3 className="text-sm uppercase tracking-widest text-[#00ff88] mb-5 font-semibold">
          Table of Contents
        </h3>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`relative ${heading.level === 3 ? 'pl-4' : ''}`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`text-sm transition-all duration-300 block ${
                  activeId === heading.id
                    ? 'text-[#e0e0e0] font-medium'
                    : 'text-[#888] hover:text-[#00ff88]'
                }`}
              >
                <span
                  className={`absolute -left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    activeId === heading.id
                      ? 'bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.5)]'
                      : 'bg-[rgba(0,255,136,0.3)]'
                  }`}
                />
                <span className="ml-5">{heading.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
