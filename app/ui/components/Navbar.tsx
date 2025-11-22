'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent-yellow border-b-2 border-black h-14 flex items-center justify-between px-4 md:px-8">
      <Link href="/" className="font-bold text-lg tracking-tighter hover:underline">
        ANDRI.PURNOMO
      </Link>
      <div className="hidden md:flex gap-6 text-sm font-bold">
        {isHomePage ? (
          <>
            <a href="#work" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
              WORK_
            </a>
            <a href="#writing" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
              WRITING_
            </a>
            <a href="#contact" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
              CONTACT_
            </a>
          </>
        ) : (
          <>
            <Link
              href="/"
              className={
                pathName === '/'
                  ? 'bg-black text-white px-2 py-1 transition-colors'
                  : 'hover:bg-black hover:text-white px-2 py-1 transition-colors'
              }
            >
              HOME_
            </Link>
            <Link
              href="/blog"
              className={
                pathName.startsWith('/blog')
                  ? 'bg-black text-white px-2 py-1 transition-colors'
                  : 'hover:bg-black hover:text-white px-2 py-1 transition-colors'
              }
            >
              BLOG_
            </Link>
            <Link
              href="/about"
              className={
                pathName === '/about'
                  ? 'bg-black text-white px-2 py-1 transition-colors'
                  : 'hover:bg-black hover:text-white px-2 py-1 transition-colors'
              }
            >
              ABOUT_
            </Link>
          </>
        )}
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
