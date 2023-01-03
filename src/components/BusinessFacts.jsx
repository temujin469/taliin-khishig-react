import React from "react";

function BusinessFacts() {
  return (
    <div class="md:container md:mx-auto px-5 my-20">
      <div class="flex justify-center flex-col items-center">
        <div class="flex items-center flex-col mb-10">
          <p class="text-xl font-semibold mb-5">Business Data Facts</p>
          <p class="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]">
            Why us?
          </p>
        </div>
        <ul class="flex lg:flex-row flex-col gap-5 justify-center ">
          <div class="flex gap-x-5">
            <li class="bg-white shadow-sm rounded-lg p-7 md:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p class="text-2xl mb-1 font-bold">870</p>
              <p class="mb-2">Deals closed</p>
              <img src="/businessFactsIcons/deals.png" />
            </li>
            <li class="bg-white shadow-sm rounded-lg p-7 md:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p class="text-2xl mb-1 font-bold">5+</p>
              <p class="mb-2">Projects</p>
              <img src="/businessFactsIcons/project.png" />
            </li>
          </div>

          <div class="flex gap-x-5">
            <li class="bg-white shadow-sm rounded-lg p-7 md:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
              <p class="text-2xl mb-1 font-bold">1.7m</p>
              <p class="mb-2">Tons transported</p>
              <img src="/businessFactsIcons/settings.png" />
            </li>
            <li class="bg-white shadow-sm rounded-lg p-7 md:p-10 flex justify-center items-center flex-col md:w-[200px] flex-[1]">
              <p class="text-2xl mb-1 font-bold">200+</p>
              <p class="mb-2">Employees</p>
              <img src="/businessFactsIcons/employee.png" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default BusinessFacts;
