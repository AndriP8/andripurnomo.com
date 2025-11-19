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
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About Me',
    href: '/about',
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const splitedPathName = pathName?.split('/')[1];
  const basePathName = `/${splitedPathName}`;

  // Hide navbar on homepage as FloatingNav is used
  if (pathName === '/') {
    return null;
  }

  return (
    <div className="space-content">
      <nav>
        <ul className="flex items-start justify-start gap-x-6 border-b border-white/10 py-6">
          {navItemData.map((item) => {
            return (
              <li
                key={item.title}
                className={twMerge(
                  'list-none text-xl font-medium transition duration-200',
                  basePathName === item.href
                    ? 'text-text-light'
                    : 'text-text-muted hover:text-accent',
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
