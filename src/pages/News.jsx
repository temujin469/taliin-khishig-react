import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllNews } from "../api/news";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import NewsCard from "../components/NewsCard";

export default function News() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(["all-news", page], () =>
    getAllNews(page)
  );

  const allNews = data?.data;
  const pagination = data?.pagination;
  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);
  console.log(data?.pagination?.total);
  return (
    <div>
      <Header
        bgImage={
          "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        }
        height={"h-[450px]"}
      />
      <div className="relative mt-[-600px] md:mt-[-120px]">
        <Heading
          title={"News"}
          subTitle="Tal Hishig Mining LLC was established in 2017 with the
                investment of MU and China, and it has been operating for the
                second year.
              "
          img={
            "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
        />
        <div className="my-container grid sm:grid-cols-2 xl:grid-cols-3 gap-5 pt-10">
          {!isLoading && !error ? (
            allNews?.map((news) => <NewsCard news={news} key={news._id} />)
          ) : (
            <p>loading...</p>
          )}
        </div>
        <div className="flex justify-center mb-10">
          <Pagination
            size="large"
            defaultPageSize={pagination?.limit}
            onChange={(p) => setPage(p)}
            defaultCurrent={1}
            total={pagination?.total}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
