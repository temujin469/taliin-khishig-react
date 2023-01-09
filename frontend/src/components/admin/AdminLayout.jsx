import { Alert, Tooltip } from "antd";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdminContext } from "../../contexts/AdminStateContext";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import ThemeSettings from "./ThemeSettings";
import { FiSettings } from "react-icons/fi";
import { useAuthContext } from "../../contexts/AuthContext";
import ContainerBox from "./ContainerBox";

function AdminLayout() {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useAdminContext();

  const { currentUser } = useAuthContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return currentUser?.role === "admin" || currentUser?.role === "operator" ? (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip title="Тохиргоо" placement="top" color={currentColor}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-gray-200 hover:text-gray-700"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-full sm:w-72 flex z-50 fixed shadow-xl sidebar">
            <div className="w-72 bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
            <div className="bg-black/50 flex-[1] sm:hidden"></div>
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full z-30 ">
            <AdminNavbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <ContainerBox>
              <Outlet />
            </ContainerBox>
          </div>
          <AdminFooter />
        </div>
      </div>
    </div>
  ) : currentUser?.role === "user" ? (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <Alert
          description="Та энэ хуудасруу нэвтрэх боломжгүй байна!"
          type="error"
          showIcon
        />
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default AdminLayout;
