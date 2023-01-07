import { Alert, Pagination } from "antd";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllProject } from "../../api/projects";
import ProjectCard from "../../components/ProjectCard";
import SkeletonCard from "../../components/SkeletonCard";
import { useAdminContext } from "../../contexts/AdminStateContext";
import catchResponseErr from "../../utils/catchResponseErr";

function EditProject() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(["all-projects", page], () =>
    getAllProject(page)
  );

  const projects = data?.data;
  const pagination = data?.pagination;

  const { currentColor, activeMenu } = useAdminContext();

  // useEffect(() => {
  //   // 👇️ scroll to top on
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [page]);

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {isLoading ? (
          Array(5)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)
        ) : error ? (
          <Alert message={catchResponseErr(error)} type="error" />
        ) : (
          projects?.map((project) => <ProjectCard project={project} />)
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

export default EditProject;
