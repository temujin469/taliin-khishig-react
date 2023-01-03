import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
