import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

const partners = [
  {
    _id: 1,
    name: "abc",
    logo: "/partnersLogo/5fbce03160403 1.png",
  },
  {
    _id: 2,
    name: "abc",
    logo: "/partnersLogo/4K-FEY6AS5-KE25QHE-JCIGQVS-ZM-removebg-preview 1.png",
  },
  {
    _id: 3,
    name: "abc",
    logo: "/partnersLogo/lfbcdz8ulzu3ahd3cwjv 10.png",
  },
];

function Partners() {
  return (
    <div className="bg-white">
      <div className="md:container md:mx-auto">
        <div className="flex items-center flex-col pt-16">
          <p className="text-xl font-semibold mb-5">Partners</p>
          <p className="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]">
            Working with us?
          </p>
        </div>
        <div className="w-full overflow-hidden py-20 px-5 flex justify-center">
          <Swiper
            className="flex items-center"
            spaceBetween={20}
            modules={[Autoplay]}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 70,
              },
            }}
          >
            {partners?.map((partner) => (
              <SwiperSlide
                key={partner._id}
                className="flex items-center justify-center"
              >
                <div className="flex justify-center h-[80px] cursor-pointer">
                  <img src={partner.logo} className="object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Partners;
