import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";

function News() {
  return (
    //  {/* <!-- news-section start--> */}
    <div className="lg:container lg:mx-auto px-5  md:px-40">
      <div className="flex flex-col md:flex-row items-center gap-5 pt-16">
        <p className="text-xl font-semibold">Latest news</p>
        <p className="py-2 px-5 rounded-lg bg-orange-400/40 flex items-center text-center text-[#FE7200]">
          More news
          <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
        </p>
      </div>
      <div className="relative">
        {
          <Swiper
            className="overflow-hidden py-12"
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
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
                <SwiperSlide key={i}>
                  <div className=" rounded-xl overflow-hidden cursor-pointer">
                    <img
                      src="/newsImage/news1.png"
                      className="w-full h-[150px] object-cover"
                      alt=""
                    />
                    <div className="py-5">
                      <p className="font-semibold text-[15px] text-gray-600 h-[50px] overflow-hidden">
                        “Taliin Khishig Mining LLC: we produce is essential for
                        the world to continue...”
                      </p>

                      <Link to="#" className="flex items-end">
                        <p className="text-primary  hover:pr-2 duration-200">
                          See more
                        </p>
                        <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        }
        <div className="hover:pr-3 transition-all duration-200 flex button-prev l-0 md:right-20 justify-center items-center absolute rounded-full border-gray-700 top-[-39px] border-2 w-10 h-10 text-gray-700 z-20">
          <FiIcons.FiChevronLeft className=" text-[23px]" />
        </div>
        <div className="hover:pl-3 transition-all duration-200 flex button-next absolute  justify-center items-center right-0 rounded-full border-gray-700 top-[-39px] border-2 w-10 h-10 text-gray-700 z-20">
          <FiIcons.FiChevronRight className="text-[23px]" />
        </div>
      </div>
    </div>
    // {/* <!-- news-section end--> */}
  );
}

export default News;
