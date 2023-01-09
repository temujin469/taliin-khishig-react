import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import ProjectCard from "./ProjectCard";
import { useQuery } from "react-query";
import { getAllProject } from "../api/projects";
import SkeletonCard from "./SkeletonCard";
import { Alert } from "antd";
import catchResponseErr from "../utils/catchResponseErr";
import Container from "./Container";

// const project = {
//   title: "Working with us",
//   subTitle:
//     "What we produce is essential for the world to continue to grow and many of our products will help make the transition to cleaner energy possible",
//   photo: "/projects/Rectangle 1653 (1).png",
// };

function ProjectSection() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(["all-projects", page], () =>
    getAllProject(page)
  );

  const projects = data?.data;
  const pagination = data?.pagination;
  return (
    //  {/* <!-- our-project-section start --> */}
    <Container bgColor={"#fff"}>
      <div className="flex justify-center">
        <div className=" md:grid grid-cols-7 pt-10 md:pt-20 md:pb-12">
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
              className="overflow-hidden hidden md:block pb-16 w-full"
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation, Pagination, A11y]}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1536: {
                  slidesPerView: 2,
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
                projects?.map((project) => (
                  <SwiperSlide
                    key={project._id}
                    className="flex justify-center h-fit"
                  >
                    <ProjectCard project={project} />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
            <div className="hidden hover:pr-3 transition-all duration-200 md:flex button-prev left-0 justify-center items-center absolute top-[50%] translate-y-[-50%] rounded-full border-gray-700 border-2 w-10 h-10 text-gray-700 z-20">
              <FiIcons.FiChevronLeft className="text-[23px]" />
            </div>
            <div className="hidden hover:pl-3 transition-all duration-200 md:flex button-next absolute  justify-center items-center right-0 top-[50%] translate-y-[-50%] rounded-full border-gray-700 border-2 w-10 h-10 text-gray-700 z-20">
              <FiIcons.FiChevronRight className="text-[23px]" />
            </div>
          </div>

          {/* <!-- for mobile screen --> */}
          <div className="md:hidden flex flex-col gap-5 mb-10">
            {isLoading ? (
              Array(5)
                .fill(null)
                .map((_, i) => <SkeletonCard key={i} />)
            ) : error ? (
              <Alert message={catchResponseErr(error)} type="error" />
            ) : (
              projects?.map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectSection;
