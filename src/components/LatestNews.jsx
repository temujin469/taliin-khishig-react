import React from "react";
import { useQuery } from "react-query";
import { BsCalendarDate } from "react-icons/bs";
// import { Link } from "react-router-dom";
import baseUrl from "../utils/axios";
import moment from "moment";

function LatestNews() {
  const { data, isLoading, error } = useQuery(["all-news"], async () => {
    const res = await baseUrl.get("/news");
    return res.data;
  });

  const allNews = data?.data;

  return (
    <div className="my-10 lg:my-0 w-full max-w-[800px]">
      <h3 className="heading-md lg:text-2xl mb-[30px] border-b-2 pb-2 border-gray-800">
        Сүүлийн үеийн мэдээ
      </h3>
      <ul className="space-y-4 max-w-[500px]">
        {!isLoading && !error ? (
          allNews.map((news) => (
            <a
              href={`/news/${news.slug}`}
              className="flex gap-3"
              key={news._id}
            >
              <div className="h-[130px] w-[130px] overflow-hidden rounded-xl">
                <img
                  src={news.photo}
                  className="h-[130px] w-[130px] rounded-xl object-cover hover:scale-[1.1] duration-200"
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
            </a>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default LatestNews;
