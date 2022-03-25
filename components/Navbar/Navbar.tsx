import React from "react";
import NavbarItem from "./Navbar.item";

const Header = () => {
  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    setPage(window.location.pathname);
  }, []);

  return (
    <div className="w-full width-container py-4 bg-gray-50 z-[2] border-b-2 border-gray-400 fixed">
      <nav className="flex items-center justify-between space-x-1">
        <ul className="flex items-center max-w-full mr-3">
          <NavbarItem href="/" active={page === "/"}>
            Home
          </NavbarItem>
          <NavbarItem href="/project" active={page === "/project"}>
            Project
          </NavbarItem>
          <NavbarItem href="/blog" active={page === "/blog"}>
            Blog
          </NavbarItem>
          <NavbarItem href="/about" active={page === "/about"}>
            About
          </NavbarItem>
        </ul>
        <div className="w-14 h-14 mx-autos" />
      </nav>
    </div>
  );
};

export default Header;
