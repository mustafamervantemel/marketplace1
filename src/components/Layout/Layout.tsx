import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;