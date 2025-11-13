'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const navItemData = [
  {
    title: 'Home',
    href: '/',
    isHash: false,
  },
  {
    title: 'About',
    href: '#about',
    isHash: true,
  },
  {
    title: 'Projects',
    href: '#projects',
    isHash: true,
  },
  {
    title: 'Blog',
    href: '/blog',
    isHash: false,
  },
  {
    title: 'Contact',
    href: '#contact',
    isHash: true,
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === '/';

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <ul className="flex items-center gap-8 glass rounded-full px-8 py-4">
        {navItemData.map((item) => {
          // Build the correct href based on current page
          const href = item.isHash && !isHomePage
            ? `/${item.href}`
            : item.href;

          // Determine if this nav item is active
          const isActive =
            item.href === '/'
              ? pathName === '/'
              : item.href === '/blog'
              ? pathName?.startsWith('/blog')
              : false;

          return (
            <li key={item.title} className="list-none">
              <Link
                href={href}
                className={twMerge(
                  'text-sm font-normal tracking-wide transition-all duration-300 relative group',
                  isActive
                    ? 'text-[#e0e0e0]'
                    : 'text-[#e0e0e0] hover:text-[#00ff88]',
                )}
              >
                {item.title}
                <span className={twMerge(
                  "absolute -bottom-1 left-0 h-0.5 bg-[#00ff88] transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
