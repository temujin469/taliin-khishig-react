import React from "react";
import { useQuery } from "react-query";
import { BsCalendarDate } from "react-icons/bs";
// import { Link } from "react-router-dom";
import moment from "moment";
import { getLatestNews } from "../api/news";
import { Alert, Skeleton } from "antd";
import { Link } from "react-router-dom";

function LatestNews() {
  const { data, isLoading, error } = useQuery(
    ["all-news", { Latest: true }],
    getLatestNews
  );

  const allNews = data?.data;

  return (
    <div className="my-10 lg:my-0 w-full max-w-[800px]">
      <h3 className="heading-md lg:text-2xl mb-[30px] border-b-2 pb-2 border-gray-800">
        Сүүлийн үеийн мэдээ
      </h3>
      <ul className="space-y-4 max-w-[500px]">
        {isLoading
          ? Array(3)
              .fill(null)
              .map((_, i) => (
                <div className="flex gap-3" key={i}>
                  <Skeleton.Image active className="h-[130px] w-[130px]" />
                  <div className="flex-[1]">
                    <Skeleton active />
                  </div>
                </div>
              ))
          : allNews
          ? allNews.map((news) => (
              <Link
                to={`/news/${news.slug}`}
                className="flex gap-3"
                key={news._id}
              >
                <div className="h-[130px] w-[130px] overflow-hidden rounded-lg">
                  <img
                    src={news.photo}
                    className="h-[130px] w-[130px] object-cover hover:scale-[1.1] duration-200"
                    alt={news.title}
                  />
                </div>

                <div className="flex-[1]">
                  <h3 className="text-base font-medium m-0 max-h-[100px] overflow-hidden">
                    {news.title.length > 100
                      ? `${news.title.slice(0, 64)}...`
                      : news.title}
                  </h3>
                  <p className=" text-gray mt-2 flex items-center gap-1">
                    <BsCalendarDate />
                    {moment(news.date).format("MMM Do YY")}
                  </p>
                </div>
              </Link>
            ))
          : error && <Alert message={"Алдаа гарлаа"} type="error" />}
      </ul>
    </div>
  );
}

export default LatestNews;
