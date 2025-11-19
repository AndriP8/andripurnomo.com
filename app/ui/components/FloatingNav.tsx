'use client';

import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Blog', href: '#blog' },
  { title: 'Contact', href: '#contact' },
];

export const FloatingNav = () => {
  const pathname = usePathname();

  // Only show floating nav on homepage
  if (pathname !== '/') {
    return null;
  }

  return (
    <nav className="fixed top-[30px] left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 px-4 md:px-0">
      <div className="glass px-4 md:px-8 py-3 md:py-4 rounded-full">
        <ul className="flex items-center gap-3 md:gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="text-text-light text-xs md:text-sm tracking-wide transition-all duration-300 relative group no-underline"
              >
                {item.title}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
