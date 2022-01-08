import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full width-container py-4 fixed bg-gray-50 z-[2]">
      <nav className="flex items-center justify-between space-x-1">
        <ul className="flex items-center max-w-full mr-3">
          <li className="py-1 px-1 sm:px-3 rounded-lg text-gray-600 hover:bg-gray-200">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="py-1 px-1 sm:px-3 rounded-lg text-gray-600 hover:bg-gray-200">
            <Link href="/project">
              <a>Project</a>
            </Link>
          </li>
          <li className="py-1 px-1 sm:px-3 rounded-lg text-gray-600 hover:bg-gray-200">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <div className="w-14 h-14 mx-autos" />
      </nav>
    </div>
  );
};

export default Header;
