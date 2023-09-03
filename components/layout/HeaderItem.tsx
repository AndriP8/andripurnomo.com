import Link from 'next/link';
import React from 'react';

type HeaderItemProps = {
  href: string;
  active?: boolean;
};

const HeaderItem = ({
  children,
  href,
  active,
}: React.PropsWithChildren<HeaderItemProps>) => {
  return (
    <nav
      style={{ color: 'black', textDecoration: active ? 'underline' : 'none' }}
    >
      <Link href={href}>{children}</Link>
    </nav>
  );
};

export default HeaderItem;
