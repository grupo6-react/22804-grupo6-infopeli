import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"
import Footer from "../Footer/Footer";


const Layout = () => {
  return (
    <div>
      <div>Header Component</div>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
