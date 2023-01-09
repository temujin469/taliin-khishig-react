import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-[#353B41]">
      <Container>
        <div className="py-4 md:pt-20 sm:py-6">
          <div className="flex xl:flex-row flex-col justify-between gap-8 xl:gap-20 py-10">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center ">
                <img
                  src="/images/logo1.png"
                  className="h-20 w-20 "
                  alt="Logo"
                />
                <span className="self-center text-white text-lg font-semibold">
                  TALIIN KHISHIG MINING
                </span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="xl:flex xl:gap-20">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white whitespace-nowrap">
                    For inquiries
                  </h2>
                  <ul className="text-slate-300">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">
                        Follow Taliin Khishig to stay up to date
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">
                        (+976) 7718-1188 Mail: tkh.mining@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white whitespace-normal">
                    Head Office
                  </h2>
                  <ul className="text-slate-300">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline ">
                        Head Office Address
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="hover:underline ">
                        Sukhbaatar district, Ulaanbaatar city Mongolia,
                        Shangri-La office Level 11 Room 1110
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Contact us
                </h2>
                <form className="text-slate-300 flex flex-col">
                  <label>Email*</label>
                  <input
                    type="text"
                    className="outline-none rounded-md p-1 mb-3"
                  />
                  <label>Message</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="rounded-md outline-none p-1 mb-5"
                  ></textarea>
                  <button className="border-[#FE7200] mx-auto md:mx-0 text-white bg-[#FE7200] border-2 rounded-lg w-fit py-1 px-10">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex sm:flex-row flex-col items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400  md:pb-0 pb-5">
              All rights reserved by ‘Taliin Khishig Mining LLC’ 2023
            </span>
            <span className="text-sm sm:text-center text-gray-400">
              Developed by Global Smart Systems LLC,
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
