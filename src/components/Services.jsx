import React from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="relative lg:px-20 md:px-5">
      <ul className="md:container mb-10 mx-5 md:mx-auto sm:mt-[230px] md:mt-[-80px] grid max-w-[1100px] mt-80 sm:grid-cols-2 xl:grid-cols-4 rounded-xl shadow-lg bg-white divide-y md:divide-y-0 md:divide-x  ">
        <li className="flex flex-col gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10">
          <img
            src="/serviceIcons/Group 30311.png"
            className="w-12 h-12 rounded-full overflow-hidden p-2 border-2 border-[#FE7200]"
            alt=""
          />
          <p className="font-semibold text-lg">Rail Logistics</p>
          <p className="text-[15px]">
            What we produce is essential for the world to continue to grow and
            many of our products will help make the transition to cleaner energy
            possible
          </p>
          <Link to="#" className="hover:pl-3  transition-all duration-200">
            <a>
              <FiIcons.FiArrowRight className="text-[#FE7200] text-xl" />
            </a>
          </Link>
        </li>
        <li className="flex flex-col gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10">
          <img
            src="./serviceIcons/Frame 15.png"
            className="w-12 h-12 rounded-full overflow-hidden p-2 border-2 border-[#FE7200]"
            alt=""
          />
          <p className="font-semibold text-lg">Mining</p>
          <p className="text-[15px]">
            What we produce is essential for the world to continue to grow and
            many of our products will help make the transition to cleaner energy
            possible
          </p>
          <Link to="#" className="hover:pl-3  transition-all duration-200">
            <a>
              <FiIcons.FiArrowRight className="text-[#FE7200] text-xl" />
            </a>
          </Link>
        </li>
        <li className="flex flex-col gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10">
          <img
            src="/serviceIcons/Group 30312.png"
            className="w-12 h-12 rounded-full overflow-hidden object-cover p-2 border-2 border-[#FE7200]"
            alt=""
          />
          <p className="font-semibold text-lg">Freight Transportation</p>
          <p className="text-[15px]">
            What we produce is essential for the world to continue to grow and
            many of our products will help make the transition to cleaner energy
            possible
          </p>

          <Link to="#" className="hover:pl-3  transition-all duration-200">
            <a>
              <FiIcons.FiArrowRight className="text-[#FE7200] text-xl" />
            </a>
          </Link>
        </li>
        <li className="flex flex-col gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10">
          <img
            src="/serviceIcons/Group 30312 (1).png"
            className="w-12 h-12 rounded-full overflow-hidden object-cover p-2 border-2 border-[#FE7200]"
            alt=""
          />
          <p className="font-semibold text-lg">Foreign Trade</p>
          <p className="text-[15px]">
            What we produce is essential for the world to continue to grow and
            many of our products will help make the transition to cleaner energy
            possible
          </p>

          <Link to="#" className="hover:pl-3  transition-all duration-200">
            <a>
              <FiIcons.FiArrowRight className="text-[#FE7200] text-xl" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Services;
