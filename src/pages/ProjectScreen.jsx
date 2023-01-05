import moment from "moment";
import React, { useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import baseUrl from "../utils/axios";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

function ProjectScreen() {
  const { id } = useParams();

  const {
    data: project,
    isLoading,
    error,
  } = useQuery(["project"], async () => {
    const res = await baseUrl.get(`/project/${id}`);
    return res.data.data;
  });

  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header
        height={"h-[180px]"}
        bgImage="https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      />
      <div className="relative mt-[-20px] bg-gray-100 z-[100px] py-10">
        {!isLoading && !error ? (
          <div className="mx-4 sm:mx-20 md:mx-10 xl:mx-20">
            <div className="max-w-[1280px] pt-5 mx-auto">
              <div className="lg:grid grid-cols-6 lg:gap-10 space-y-10 md:space-y-0">
                <div className="col-span-4 flex justify-center lg:block">
                  <div className="max-w-[800px]">
                    <div className="mb-5">
                      <h3 className="heading-md lg:text-2xl m-0">
                        {project.title}
                      </h3>
                      <p className=" text-gray mt-2 flex items-center gap-1 mb-5">
                        <BsCalendarDate />
                        {moment(project.date).format("MMM Do YY")}
                      </p>
                    </div>

                    <div className="w-full overflow-hidden rounded-2xl max-h-[600px] mb-5">
                      <img
                        alt="Post thumbnail"
                        src={`/upload/${project.photo}`}
                        className="transition-all w-full h-full object-cover"
                      />
                    </div>
                    <div>{parse(project.content)}</div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="col-span-4 flex justify-center lg:block">
                    <LatestNews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectScreen;
