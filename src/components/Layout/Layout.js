import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"
import { MoviesFlex } from "../Cards/MoviesFlex";
import Footer from "../Footer/Footer";


const Layout = () => {
  return (
    <div>
      <div>Header Component</div>
      <Outlet />
      <MoviesFlex />
      <Footer/>
    </div>
  );
};

export default Layout;
