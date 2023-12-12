import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface HeaderItemProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const HeaderItem = ({ children, href, active }: HeaderItemProps) => {
  const navItem = cx({
    'py-2 px-3 mx-1 rounded-lg text-gray-600 hover:bg-gray-200 text-black':
      true,
    'bg-gray-200': active,
  });

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className={navItem}>{children}</a>
      </Link>
    </li>
  );
};

export default HeaderItem;
