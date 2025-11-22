'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItemData = [
  {
    title: 'HOME_',
    href: '/',
  },
  {
    title: 'BLOG_',
    href: '/blog',
  },
  {
    title: 'ABOUT_',
    href: '/about',
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const splitedPathName = pathName?.split('/')[1];
  const basePathName = splitedPathName ? `/${splitedPathName}` : '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent-yellow border-b-2 border-black h-14 flex items-center justify-between px-4 md:px-8">
      <Link href="/" className="font-bold text-lg tracking-tighter hover:underline">
        ANDRI.PURNOMO
      </Link>
      <div className="hidden md:flex gap-6 text-sm font-bold">
        {navItemData.map((item) => {
          const isActive = basePathName === item.href;
          return (
            <Link
              key={item.title}
              href={item.href}
              className={
                isActive
                  ? 'bg-black text-white px-2 py-1 transition-colors'
                  : 'hover:bg-black hover:text-white px-2 py-1 transition-colors'
              }
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <a
        href="mailto:andri.adrp@gmail.com"
        className="bg-black text-white px-4 py-1 text-sm font-bold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all"
      >
        HIRE ME
      </a>
    </nav>
  );
};
