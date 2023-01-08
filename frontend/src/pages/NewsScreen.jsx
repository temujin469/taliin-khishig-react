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
import { Alert, Image, Skeleton, Tag } from "antd";
import catchResponseErr from "../utils/catchResponseErr";
import Header2 from "../components/Header2";

function NewsScreen() {
  const { id } = useParams();

  const {
    data: news,
    isLoading,
    error,
  } = useQuery(["news", id], async () => {
    const res = await baseUrl.get(`/news/${id}`);
    return res.data.data;
  });

  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header2 />
      <div className=" bg-gray-100 pb-10 pt-5">
        <div className="mx-4 sm:mx-20 md:mx-10 xl:mx-20">
          <div className="max-w-[1280px] pt-5 mx-auto">
            <div className="lg:grid grid-cols-6 lg:gap-10 space-y-10 md:space-y-0">
              <div className="col-span-4 flex justify-center lg:block">
                {isLoading ? (
                  <div className="flex-[1]">
                    <Skeleton active />
                    <Skeleton.Image active className="h-[600px] mt-5 w-full" />
                  </div>
                ) : error ? (
                  <Alert message={catchResponseErr(error)} type="error" />
                ) : (
                  news && (
                    <div className="max-w-[800px]">
                      <div className="mb-5">
                        <h3 className="heading-md lg:text-2xl m-0">
                          {news.title}
                        </h3>
                        <p className=" text-gray mt-2 flex items-center gap-1 mb-5">
                          <BsCalendarDate />
                          {moment(news.date).format("MMM Do YY")}
                        </p>
                        <div>
                          {news.tags.map((tag) => (
                            <Tag color="orange">{tag}</Tag>
                          ))}
                        </div>
                      </div>

                      <div className="mb-5">
                        <Image width={"100%"} src={news.photo} />
                      </div>
                      <div>{parse(news.content)}</div>
                    </div>
                  )
                )}
              </div>

              <div className="col-span-2">
                <LatestNews />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsScreen;
