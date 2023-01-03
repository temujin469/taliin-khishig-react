import React from "react";
import * as FiIcons from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  return (
    //  {/* <!-- our-project-section start --> */}
    <div className="bg-white">
      <div className="md:container md:px-10 lg:px-0 md:mx-auto md:grid grid-cols-7 md:py-32 py-16">
        <div className="flex items-center justify-center 2xl:col-span-1 md:col-span-2">
          <div className="flex items-center flex-col mb-10">
            <p className="text-xl font-semibold mb-5">Our project</p>
            <p className="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]">
              Why us?
            </p>
          </div>
        </div>

        {/* <!-- for md screen --> */}
        <div className="relative md:col-span-5 2xl:col-span-6 2xl:ml-5  md:px-10 lg:px-20 flex justify-center">
          <Swiper
            className="overflow-hidden hidden md:block"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1028: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <div className="rounded-xl border overflow-hidden max-w-[350px] ">
                    <img
                      src="/projects/Rectangle 1653 (1).png"
                      className="w-full h-[200px] object-cover"
                      alt=""
                    />
                    <div className=" p-5">
                      <p className="font-semibold mb-2 text-lg whitespace-normal overflow-hidden ">
                        Working with us
                      </p>
                      <p className="text-[15px] h-[110px] mb-3 overflow-hidden">
                        What we produce is essential for the world to continue
                        to grow and many of our products will help make the
                        transition to cleaner energy possible
                      </p>
                      <a href="#" className="flex items-end">
                        <p className="text-primary hover:pr-2 duration-200">
                          See more
                        </p>
                        <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="hidden hover:pr-3 transition-all duration-200 lg:flex button-prev left-0 justify-center items-center absolute top-[50%] translate-y-[50%] rounded-full border-gray-700 border-2 w-10 h-10 text-gray-700 z-20">
            <FiIcons.FiChevronLeft className="text-[23px]" />
          </div>
          <div className="hidden hover:pl-3 transition-all duration-200 lg:flex button-next absolute  justify-center items-center right-0 top-[50%] translate-y-[50%] rounded-full border-gray-700 border-2 w-10 h-10 text-gray-700 z-20">
            <FiIcons.FiChevronRight className="text-[23px]" />
          </div>
        </div>

        {/* <!-- for mobile screen --> */}
        <div className="md:hidden flex flex-col gap-5 px-10 items-center ">
          <div className=" w-[300px] shadow-md rounded-xl border">
            <img src="/wh/img3.png" className="w-full h-[150px]" alt="" />
            <div className=" p-5">
              <p className="font-semibold text-lg mb-3">Working with us</p>
              <p className="text-[15px] h-[105px] overflow-hidden">
                What we produce is essential for the world to continue to grow
                and many of our products will help make the transition to
                cleaner energy possible
              </p>
              <a href="#" className="flex items-center">
                <p className="text-[#FE7200]">See more</p>
                <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
              </a>
            </div>
          </div>
          <div className=" w-[300px] shadow-md rounded-xl border">
            <img src="/wh/img3.png" className="w-full h-[150px]" alt="" />
            <div className=" p-5">
              <p className="font-semibold text-lg mb-3">Working with us</p>
              <p className="text-[15px] h-[105px] overflow-hidden">
                What we produce is essential for the world to continue to grow
                and many of our products will help make the transition to
                cleaner energy possible
              </p>
              <a href="#" className="flex items-center">
                <p className="text-[#FE7200]">See more</p>
                <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
              </a>
            </div>
          </div>
          <div className=" w-[300px] shadow-md rounded-xl border">
            <img src="/wh/img3.png" className="w-full h-[150px]" alt="" />
            <div className=" p-5">
              <p className="font-semibold text-lg mb-3">Working with us</p>
              <p className="text-[15px] h-[105px] overflow-hidden">
                What we produce is essential for the world to continue to grow
                and many of our products will help make the transition to
                cleaner energy possible
              </p>
              <a href="#" className="flex items-center">
                <p className="text-[#FE7200]">See more</p>
                <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- our-project-section end --> */}
  );
}

export default Projects;
