import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Header Component</div>
      <Outlet />
    </div>
  );
};

export default Layout;
