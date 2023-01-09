import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCardChecklist, BsPieChart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import { FiEdit } from "react-icons/fi";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { Tooltip } from "antd";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom" color={color}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </Tooltip>
);

const AdminNavbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useAdminContext();

  const { currentUser } = useAuthContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const navigate = useNavigate();

  return (
    <div className="flex shadow-md bg-white dark:bg-secondary-dark-bg sm:dark:bg-transparent sm:bg-transparent sm:shadow-none justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Цэс"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Мэдээ нийтлэх"
          customFunc={() => navigate("/admin/add-news")}
          color={currentColor}
          icon={<FiEdit />}
        />
        <NavButton
          title="Төсөл оруулах"
          customFunc={() => navigate("/admin/add-project")}
          color={currentColor}
          icon={<BsCardChecklist className="text-[22px]" />}
        />
        <NavButton
          title="Хураангуй"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<BsPieChart />}
        />
        <Tooltip title="Профайл" placement="bottom" color={currentColor}>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8 object-cover"
              src={"/images/user.png"}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 font-bold ml-1 text-14">
                {currentUser?.name}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default AdminNavbar;
