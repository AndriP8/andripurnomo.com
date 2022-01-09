import React from "react";
import Link from "next/link";
import cx from "classnames";

interface HeaderItemProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const HeaderItem = ({ children, href, active }: HeaderItemProps) => {
  const navItem = cx({
    "py-1 px-1 sm:px-3 mx-1 rounded-lg text-gray-600 hover:bg-gray-200": true,
    "bg-gray-400 hover:bg-gray-400": active,
  });

  return (
    <li className={navItem}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default HeaderItem;
