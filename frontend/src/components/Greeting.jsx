import React from "react";
import * as FiIcons from "react-icons/fi";
import Container from "./Container";

function Greeting() {
  return (
    <div>
      <Container>
        <div className=" md:flex justify-center items-center hidden my-20">
          <div className=" md:min-h-[400px] flex md:flex-row flex-col shadow-lg rounded-xl overflow-hidden">
            <div className="flex-[1]">
              <img
                src="/images/greeting.png"
                className="h-full object-cover w-full"
              />
            </div>
            <div className="flex-[1] bg-white lg:p-20 p-10 flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold mb-5">Greeting</p>
                <div className="mb-5">
                  <i className="fa-solid fa-quote-left text-[#FE7200]"></i>
                  <p className="px-1">
                    Mineral products account for more than 90% of Mongolia's
                    exports, and in the first seven months of last year, this
                    sector alone accounted for 32.5% of Mongolia's total revenue
                    budget. According to the statistics of the road transport
                    industry, in the first quarter of 2021, 53.4 percent of the
                    total 17.4 million tons of cargo was transported by road and
                    46.6 percent by rail.
                  </p>
                  <div className="flex justify-end">
                    <i className="fa-solid fa-quote-right text-[#FE7200]"></i>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-2 p-5">
                <p className="text-lg font-semibold mb-4">Khongor.O</p>
                <p className="font-medium text-gray-600">
                  CEO of "Taliin Khishig" LLC
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- greeting-section-mobile start --> */}
        <div className="my-16 flex justify-center items-center md:hidden">
          <div className="">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/greeting.png" className="w-full h-full" />
            </div>
            <div className="bg-white rounded-lg relative p-8 mt-[-80px] mx-5">
              <div>
                <div className="mb-6">
                  <i className="fa-solid fa-quote-left text-[#FE7200]"></i>

                  <p className="font-semibold text-lg px-1">
                    Railway is a sector that attracts and elevates the country's
                    strategic development.
                  </p>
                  <div className="flex justify-end">
                    <i className="fa-solid fa-quote-right text-primary"></i>
                  </div>
                </div>
                <div className="flex items-center pb-6">
                  <p className="text-gray-500">Company info</p>
                  <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4 pt-6">
                <img
                  src="/images/greeting.png"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-lg">Khongor.O</p>
                  <p className="text-gray-500 uppercase">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- greeting-section-mobile end --> */}
      </Container>
    </div>
  );
}

export default Greeting;
