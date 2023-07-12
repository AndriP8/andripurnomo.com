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
    <Link
      href={href}
      style={{ color: 'black', textDecoration: active ? 'underline' : 'none' }}
    >
      {children}
    </Link>
  );
};

export default HeaderItem;
