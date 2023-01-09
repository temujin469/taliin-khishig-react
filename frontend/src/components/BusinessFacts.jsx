import React from "react";

function BusinessFacts() {
  return (
    <div className="md:container md:mx-auto px-5 py-10 sm:my-20">
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center flex-col mb-10">
          <p className="text-xl font-semibold mb-5">Business Data Facts</p>
          <p className="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]">
            Why us?
          </p>
        </div>
        <ul className="flex lg:flex-row flex-col gap-5 justify-center ">
          <div className="flex gap-x-5">
            <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p className="text-2xl mb-1 font-bold">870</p>
              <p className="mb-2">Deals closed</p>
              <img src="/businessFactsIcons/deals.png" />
            </li>
            <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p className="text-2xl mb-1 font-bold">5+</p>
              <p className="mb-2">Projects</p>
              <img src="/businessFactsIcons/project.png" />
            </li>
          </div>

          <div className="flex gap-x-5">
            <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p className="text-2xl mb-1 font-bold">1.7m</p>
              <p className="mb-2">Tons transported</p>
              <img src="/businessFactsIcons/settings.png" />
            </li>
            <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col md:w-[200px] flex-[1]">
              <p className="text-2xl mb-1 font-bold">200+</p>
              <p className="mb-2">Employees</p>
              <img src="/businessFactsIcons/employee.png" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default BusinessFacts;
