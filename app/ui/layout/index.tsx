import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen h-full flex flex-col bg-gray-50 items-center font-inter">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
