import { Alert, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllNews } from "../../api/news";
import NewsCard from "../../components/NewsCard";
import SkeletonCard from "../../components/SkeletonCard";
import { useAdminContext } from "../../contexts/AdminStateContext";
import catchResponseErr from "../../utils/catchResponseErr";

function EditNews() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(["all-news", page], () =>
    getAllNews(page)
  );

  const { currentColor, activeMenu } = useAdminContext();

  const allNews = data?.data;
  const pagination = data?.pagination;

  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {isLoading ? (
          Array(5)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)
        ) : error ? (
          <Alert message={catchResponseErr(error)} type="error" />
        ) : (
          allNews.map((news) => <NewsCard news={news} />)
        )}
      </div>
      {!isLoading ? (
        <div className="flex justify-center mt-10">
          <Pagination
            size="large"
            defaultPageSize={pagination?.limit}
            onChange={(p) => setPage(p)}
            current={page}
            total={pagination?.total}
          />
        </div>
      ) : null}
    </div>
  );
}

export default EditNews;
