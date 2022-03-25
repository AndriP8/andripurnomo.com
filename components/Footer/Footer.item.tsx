import { ReactChild } from "react";

interface FooterItemProps {
  href: string;
  children: ReactChild;
}

const FooterItem = (props: FooterItemProps) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  );
};

export default FooterItem;
