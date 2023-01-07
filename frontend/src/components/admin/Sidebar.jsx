import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { Tooltip } from "antd";
import { links } from "./datas";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useAdminContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  dark:text-gray-200 dark:hover:bg-main-dark-bg hover:bg-light-gray m-2";

  return (
    <div className="mx-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center mt-3">
              <img
                src="/images/logo1.png"
                alt="logo"
                className="logo w-12 md:w-[70px]"
              />
              <p
                style={{ color: currentColor }}
                className="text-[14px] md:text-[15px] font-semibold"
              >
                TALIIN KHISHIG MINING
              </p>
            </Link>
            <Tooltip title="Цэс" placement="bottom">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-0">
            {links?.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`${link.path}`}
                    key={link.path}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
