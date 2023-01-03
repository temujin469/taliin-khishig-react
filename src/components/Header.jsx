import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <MyHeader>
      <div className="header-section relative md:h-[90vh] h-[65vh]">
        {/* <!-- navbar start --> */}
        <nav className="lg:container shadow-md block mx-auto fixed top-0 w-full md:static md:shadow-none z-50">
          <div className="nav-row-1 md:flex justify-end items-center hidden h-[50px] border-b bottom-1">
            <div className="language-option-wrapper flex items-center">
              <p className="text-white pr-2">English</p>
              <FiChevronDown className="text-white text-[19px]" />
            </div>
          </div>
          <div className="nav-row-2 px-4 bg-white md:bg-transparent flex justify-between items-center md:h-[100px] h-[60px]">
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="logo-wrapper flex items-center">
                <img
                  src="/images/logo1.png"
                  alt="logo"
                  className="logo w-12 md:w-20"
                />
                <h2 className="logo-title hidden md:text-white font-semibold md:block">
                  TALIIN KHISHIG MINING
                </h2>
              </Link>
              <div className="flex items-center md:hidden">
                <div>
                  <FiChevronDown className="text-white text-[19px]" />
                </div>
                <div onClick={() => setOpen(!open)}>
                  <FiMenu className="text-[25px]" />
                </div>
              </div>
            </div>
            <ul
              className={`bg-black/80 duration-300 ease-out md:h-auto overflow-hidden top-[60px] md:bg-transparent text-center md:flex justify-between items-center w-full fixed md:static left-0 ${
                open ? "h-full" : "h-0"
              }`}
            >
              <li className="my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/about" className="nav-link active text-white">
                  About
                </Link>
                <FiChevronDown className="text-white text-[19px]" />
              </li>
              <li className="my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/services" className="nav-link text-white">
                  Service
                </Link>
                <FiChevronDown className="text-white text-[19px]" />
              </li>
              <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/projects" className="nav-link text-white">
                  Project
                </Link>
              </li>
              <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/career" className="nav-link text-white">
                  Careers
                </Link>
              </li>
              <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/news" className="nav-link text-white">
                  News
                </Link>
              </li>
              <li className="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
                <Link to="/contact" className="nav-link text-white">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- navbar end --> */}
        <div className="text-white lg:px-10 relative top-[60vh] mt-[60px] md:mt-0 md:static md:h-[calc(80vh-150px)] flex flex-col-reverse md:container md:mx-auto">
          <div className="md:max-w-[700px] bg-gradient-to-br from-[#e77021] to-[#f5b062] md:bg-none pb-32 pt-16 px-10 md:px-0 md:pb-16">
            <p className="text-3xl font-semibold mb-10 md:mb-5">
              Your road to the future resources.
            </p>
            <p className="font-medium text-lg">
              What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible
            </p>
          </div>
        </div>
      </div>
    </MyHeader>
  );
}

const change = keyframes`
  0% {
    background-image: url("/images/hero1.png");
  }
  50% {
    background-image: url("/images/hero2.png");
  }
  100% {
    background-image: url("/images/hero3.png");
  }
 
`;

const MyHeader = styled.div`
  background-image: url("/images/hero2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  animation: ${change} 10s infinite ease-in-out;
`;

export default Header;
