import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    setPage(window.location.pathname);
  }, []);

  return (
    <div className="w-full width-container py-4 fixed bg-gray-50 z-[2] border-b-2 border-gray-400">
      <nav className="flex items-center justify-between space-x-1">
        <ul className="flex items-center max-w-full mr-3">
          <HeaderItem href="/" active={page === "/"}>
            Home
          </HeaderItem>
          <HeaderItem href="/project" active={page === "/project"}>
            Project
          </HeaderItem>
          <HeaderItem href="/about" active={page === "/about"}>
            About
          </HeaderItem>
        </ul>
        <div className="w-14 h-14 mx-autos" />
      </nav>
    </div>
  );
};

export default Header;
