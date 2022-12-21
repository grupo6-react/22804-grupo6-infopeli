import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"
import { MoviesFlex } from "../Cards/MoviesFlex";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar"


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

      <MoviesFlex />
      <Footer/>

    </div>
  );
};

export default Layout;
