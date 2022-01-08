import React from "react";
import Footer from "layout/Footer";
import Header from "layout/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen h-auto flex flex-col bg-gray-50 items-center font-inter">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
