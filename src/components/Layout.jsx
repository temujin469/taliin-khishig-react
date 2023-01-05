import { FloatButton } from "antd";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Header
        title={"Your road to the future resources."}
        description="What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible"
      />
      <Outlet />
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
}

export default Layout;
