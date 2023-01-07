import React from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";

function InfoSection() {
  return (
    <div className="bg-white">
      <ul className="md:container mx-auto px-10 md:px-20  py-20 flex flex-col justify-center items-center md:flex-row gap-5">
        <li className="rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
          <img
            src="/wh/img1.png"
            className="w-full h-[135px] object-cover"
            alt=""
          />
          <div className=" p-5">
            <p className="font-semibold text-lg mb-3 whitespace-normal overflow-hidden">
              What we produce
            </p>
            <p className="text-sm mb-4 md:h-[100px] overflow-hidden">
              What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible
            </p>
            <Link to="#" className="flex items-end">
              <p className="text-[#fe7200] hover:pr-2  transition-all duration-200">
                See more
              </p>
              <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
            </Link>
          </div>
        </li>
        <li className="rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
          <img
            src="/wh/img2.png"
            className="w-full h-[135px] object-cover"
            alt=""
          />
          <div className=" p-5">
            <p className="font-semibold text-lg mb-3 whitespace-normal overflow-hidden">
              What we produce
            </p>
            <p className="text-sm mb-4 md:h-[100px] overflow-hidden">
              What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible
            </p>
            <Link to="#" className="flex items-end">
              <p className="text-[#fe7200] hover:pr-2  transition-all duration-200">
                See more
              </p>
              <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
            </Link>
          </div>
        </li>
        <li className="rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
          <img
            src="/wh/img3.png"
            className="w-full h-[135px] object-cover"
            alt=""
          />
          <div className=" p-5">
            <p className="font-semibold text-lg mb-3 whitespace-normal overflow-hidden">
              What we produce
            </p>
            <p className="text-sm mb-4 md:h-[100px] overflow-hidden">
              What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible
            </p>
            <Link to="#" className="flex items-end">
              <p className="text-[#fe7200] hover:pr-2  transition-all duration-200">
                See more
              </p>
              <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default InfoSection;
