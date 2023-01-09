import React from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Container from "./Container";

const infos = [
  {
    photo: "/wh/img1.png",
    title: "What we produce",
    subTitle:
      "What we produce is essential for the world to continue to grow and many of our products will help make the transition to cleaner energy possible",
  },
  {
    photo: "/wh/img2.png",
    title: "What we produce",
    subTitle:
      "What we produce is essential for the world to continue to grow and many of our products will help make the transition to cleaner energy possible",
  },
  {
    photo: "/wh/img3.png",
    title: "What we produce",
    subTitle:
      "What we produce is essential for the world to continue to grow and many of our products will help make the transition to cleaner energy possible",
  },
];

function InfoSection() {
  return (
    <Container bgColor={"#fff"}>
      <div className="flex flex-col justify-center items-center md:flex-row gap-5">
        <Swiper
          className=" hidden sm:block w-full"
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {infos.map((info, i) => (
            <SwiperSlide key={i} className="pt-16 pb-20">
              <div className="rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
                <img
                  src={info.photo}
                  className="w-full h-[170px] object-cover"
                  alt=""
                />
                <div className=" p-5">
                  <p className="font-semibold text-lg mb-3 whitespace-normal overflow-hidden">
                    {info.title}
                  </p>
                  <p className="text-sm mb-4 md:h-[90px] overflow-hidden">
                    {info.subTitle}
                  </p>
                  <Link to="#" className="flex items-end">
                    <p className="text-[#fe7200] hover:pr-2  transition-all duration-200">
                      See more
                    </p>
                    <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sm:hidden py-10">
          {infos.map((info, i) => (
            <div
              className="rounded-xl border overflow-hidden shadow-sm hover:shadow-lg mb-4"
              key={i}
            >
              <img
                src={info.photo}
                className="w-full h-[160px] object-cover"
                alt=""
              />
              <div className=" p-5">
                <p className="font-semibold text-lg mb-3 whitespace-normal overflow-hidden">
                  {info.title}
                </p>
                <p className="text-sm mb-4  overflow-hidden">{info.subTitle}</p>
                <Link to="#" className="flex items-end">
                  <p className="text-[#fe7200] hover:pr-2  transition-all duration-200">
                    See more
                  </p>
                  <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default InfoSection;
