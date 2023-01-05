import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import { FiEdit } from "react-icons/fi";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { Tooltip } from "antd";
import { useAuthContext } from "../../contexts/AuthContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom">
    <button
      type="button"
      onClick={() => customFunc()}
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

  return (
    <div className="flex shadow-md sm:shadow-none justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Цэс"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Байр сууц бүртгэх"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiEdit />}
        />
        <NavButton
          title="Захиалга"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsCardChecklist className="text-[22px]" />}
        />
        <NavButton
          title="Мэдэгдэл"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <Tooltip title="Профайл" placement="bottom">
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

        {/* {isClicked.cart && <Cart />} */}
        {/* {isClicked.chat && <Chat />} */}
        {/* {isClicked.notification && <Notification />} */}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default AdminNavbar;
