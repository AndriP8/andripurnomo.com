'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItemData = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Blog',
    href: '/#blog',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

export const Navbar = () => {
  const pathName = usePathname();

  // Hide navbar on homepage as FloatingNav is used
  if (pathName === '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark/95 backdrop-blur-md border-b border-white/10 z-[1000] py-5">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-accent no-underline">
          AP
        </Link>
        <ul className="flex items-center gap-6 md:gap-8 list-none">
          {navItemData.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="text-text-light text-sm transition-colors duration-300 hover:text-accent no-underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
