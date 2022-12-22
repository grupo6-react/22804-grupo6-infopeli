import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar"
import Featured from "../featured/Featured"


const Layout = () => {
  return (
    <div>
      <div>Header Component</div>
      <Outlet />
      <Featured/>
      <Navbar/>
   
      <Footer/>
    </div>
  );
};

export default Layout;
