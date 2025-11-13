'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const navItemData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Blog',
    href: '#blog',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <ul className="flex items-center gap-8 glass rounded-full px-8 py-4">
        {navItemData.map((item) => {
          const isActive =
            item.href === '/'
              ? pathName === '/'
              : pathName?.startsWith(item.href);

          return (
            <li key={item.title} className="list-none">
              <Link
                href={item.href}
                className={twMerge(
                  'text-sm font-normal tracking-wide transition-all duration-300 relative group',
                  isActive
                    ? 'text-[#e0e0e0]'
                    : 'text-[#e0e0e0] hover:text-[#00ff88]',
                )}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff88] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
