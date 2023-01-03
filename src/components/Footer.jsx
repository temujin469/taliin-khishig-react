import React from "react";

function Footer() {
  return (
    <footer className="bg-[#353B41]">
      <div className="p-5 md:pt-20 lg:container md:px-24 lg:mx-auto  sm:p-6">
        <div className="flex md:flex-row flex-col justify-between gap-8 md:gap-6 py-10">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/images/logo1.png" className="h-20 w-20" alt="Logo" />
              <span className="self-center text-white text-lg font-semibold">
                TALIIN KHISHIG MINING
              </span>
            </a>
          </div>
          <div className="lg:flex gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                For inquiries
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Follow Taliin Khishig
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Head Office
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Head Office Address
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Contact us
            </h2>
            <form className="text-gray-400 flex flex-col">
              <label>Email*</label>
              <input type="text" className="outline-none rounded-lg p-1 mb-3" />
              <label>Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className="rounded-lg outline-none p-1 mb-5"
              ></textarea>
              <button className="border-[#FE7200] mx-auto md:mx-0 text-[#FE7200] hover:text-white hover:bg-[#FE7200] border-2 rounded-lg w-fit py-1 px-10">
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex sm:flex-row flex-col items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400  md:pb-0 pb-5">
            All rights reserved by ‘Taliin Khishig Mining LLC’ 2022
          </span>
          <span className="text-sm sm:text-center text-gray-400">
            Developed by Global Smart Systems LLC,
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
