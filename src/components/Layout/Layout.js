
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
