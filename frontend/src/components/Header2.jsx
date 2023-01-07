import React, { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Affix, Dropdown, Popconfirm } from "antd";
import { useAuthContext } from "../contexts/AuthContext";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Header2({ bg }) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { currentUser, logout } = useAuthContext();

  const confirm = () => {
    logout();
  };

  const isAdmin =
    currentUser?.role === "admin" || currentUser?.role === "operator";

  const about = [
    {
      key: "1",
      label: <Link to="/about-us">About us</Link>,
    },
  ];

  const service = [
    {
      key: "1",
      label: <Link to="/service/rail-logistic">Rail logistic</Link>,
    },
    {
      key: "2",
      label: (
        <Link to="/service/freight-transportation">Freight transportation</Link>
      ),
    },
    {
      key: "3",
      label: <Link to="/service/foreign-trade">Foreign trade</Link>,
    },
    {
      key: "4",
      label: <Link to="/service/mining">Mining</Link>,
    },
  ];

  return (
    // <Affix offsetTop={-50}>
    <div className=" bg-white">
      <nav className=" shadow-md block mx-auto  w-full md:static md:shadow-none z-20">
        <div className="lg:container mx-auto md:flex justify-end items-center hidden h-[50px] border-b">
          {isAdmin && (
            <Link to="/admin/dashboard" className="text-slate-800 mr-10">
              Admin panel
            </Link>
          )}

          {currentUser ? (
            <Popconfirm
              title="Гарах"
              description="Та гарахдаа итгэлтэй байна уу?"
              onConfirm={confirm}
              okText="Тийм"
              placement="bottomRight"
              cancelText="Үгүй"
            >
              <p className="text-slate-800 mr-10 cursor-pointer">Logout</p>
            </Popconfirm>
          ) : (
            <Link to="/register" className="text-slate-800 mr-10">
              Бүртгүүлэх
            </Link>
          )}

          <div className="language-option-wrapper flex items-center">
            <p className="text-slate-800 pr-2">English</p>
            <FiChevronDown className="text-slate-800 text-[19px]" />
          </div>
        </div>
        <Affix offsetTop={0}>
          <div className="bg-white ">
            <div className="lg:container mx-auto px-4 flex justify-between items-center md:h-[100px] h-[60px]">
              <div className="flex items-center justify-between w-full">
                <Link to="/" className=" flex items-center">
                  <img
                    src="/images/logo1.png"
                    alt="logo"
                    className="logo w-12 md:w-20"
                  />
                  <h2 className="logo-title hidden md:text-slate-800 font-semibold md:block text-base">
                    TALIIN KHISHIG MINING
                  </h2>
                </Link>
                <div className="flex items-center md:hidden gap-5">
                  {isAdmin && (
                    <Link to="/admin/dashboard">
                      <MdOutlineAdminPanelSettings
                        size={25}
                        className="text-slate-700"
                      />
                    </Link>
                  )}

                  {currentUser ? (
                    <Popconfirm
                      title="Гарах"
                      description="Та гарахдаа итгэлтэй байна уу?"
                      onConfirm={confirm}
                      okText="Тийм"
                      placement="bottomRight"
                      cancelText="Үгүй"
                    >
                      <p>
                        <FaRegUser size={20} className="text-slate-700" />
                      </p>
                    </Popconfirm>
                  ) : (
                    <Link
                      to="/register"
                      className="bg-primary text-slate-800 py-1 px-2 rounded-md text-base"
                    >
                      Бүртгүүлэх
                    </Link>
                  )}
                  <div onClick={() => setOpen(!open)}>
                    <FiMenu className="text-[25px]" />
                  </div>
                </div>
              </div>

              <ul
                className={`bg-white z-50 duration-300 ease-out md:h-auto overflow-hidden top-[60px] md:bg-transparent text-center md:flex justify-between items-center w-full fixed md:static left-0 ${
                  open ? "h-full min-h-screen overflow-y-scroll" : "h-0"
                }`}
              >
                <Dropdown
                  menu={{
                    items: about,
                  }}
                  placement="bottom"
                  arrow
                >
                  <li className="cursor-pointer my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                    <div className="text-slate-800 text-base">About</div>
                    <FiChevronDown className="text-slate-800 text-[19px]" />
                  </li>
                </Dropdown>

                <Dropdown
                  menu={{
                    items: service,
                  }}
                  placement="bottom"
                  arrow
                >
                  <li className="cursor-pointer my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                    <div className="text-slate-800 text-base">Service</div>
                    <FiChevronDown className="text-slate-800 text-[19px]" />
                  </li>
                </Dropdown>

                <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                  <Link to="/projects" className=" text-slate-800 text-base">
                    Project
                  </Link>
                </li>
                <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                  <Link to="/career" className=" text-slate-800 text-base">
                    Careers
                  </Link>
                </li>
                <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                  <Link to="/news" className=" text-slate-800 text-base">
                    News
                  </Link>
                </li>
                <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                  <Link to="/contact" className=" text-slate-800 text-base">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Affix>
      </nav>
    </div>
  );
}
export default Header2;
