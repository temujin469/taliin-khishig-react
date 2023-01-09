import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import NewsCard from "./NewsCard";
import { getLatestNews } from "../api/news";
import SkeletonCard from "./SkeletonCard";
import { Alert } from "antd";
import catchResponseErr from "../utils/catchResponseErr";
import Container from "./Container";

function NewsSection() {
  const { data, isLoading, error } = useQuery(
    ["all-news", { latest: true }],
    getLatestNews
  );

  const allNews = data?.data;

  return (
    <Container>
      <div className=" lg:px-20 xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-5 pt-10 sm:pt-20">
          <p className="text-xl font-semibold">Latest news</p>
          <Link
            to="news"
            className="py-2 px-5 rounded-lg bg-orange-400/40 flex items-center text-center text-[#FE7200]"
          >
            More news
            <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
          </Link>
        </div>
        <div className="relative">
          <Swiper
            className="overflow-hidden py-10 sm:py-12 mb-10"
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
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
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {isLoading ? (
              Array(5)
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <SkeletonCard />
                  </SwiperSlide>
                ))
            ) : error ? (
              <Alert message={catchResponseErr(error)} type="error" />
            ) : (
              allNews?.map((news) => (
                <SwiperSlide key={news._id}>
                  <NewsCard news={news} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <div className="hover:pr-3 transition-all duration-200 flex button-prev l-0 md:right-20 justify-center items-center absolute rounded-full border-gray-700 top-[-39px] border-2 w-10 h-10 text-gray-700 z-20">
            <FiIcons.FiChevronLeft className=" text-[23px]" />
          </div>
          <div className="hover:pl-3 transition-all duration-200 flex button-next absolute  justify-center items-center right-0 rounded-full border-gray-700 top-[-39px] border-2 w-10 h-10 text-gray-700 z-20">
            <FiIcons.FiChevronRight className="text-[23px]" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NewsSection;
