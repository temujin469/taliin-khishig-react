import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { useAuthContext } from "../../contexts/AuthContext";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "Профайл",
    desc: "Хувийн мэдээлэл",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  // {
  //   icon: <BsShield />,
  //   title: "My Inbox",
  //   desc: "Messages & Emails",
  //   iconColor: "rgb(0, 194, 146)",
  //   iconBg: "rgb(235, 250, 242)",
  // },
];

const UserProfile = () => {
  const { currentColor } = useAdminContext();
  const { currentUser, logout } = useAuthContext();

  const navigate = useNavigate();

  return (
    <div className="z-40 shadow-xl rounded-none sm:rounded-xl absolute top-0 right-0 w-full h-screen sm:h-auto  sm:right-1 sm:top-16  sm:w-96 bg-white dark:bg-[#42464D] p-8">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">
          Таний профайл
        </p>
        <MyButton
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24 object-cover"
          src={"/images/user.png"}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {currentUser?.name}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            {currentUser?.role}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {currentUser?.email}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <MyButton
          color="white"
          bgColor={currentColor}
          text="Гарах"
          borderRadius="8px"
          width="full"
          onPress={() => {
            logout();
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
