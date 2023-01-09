import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import baseUrl from "../utils/axios";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import Heading from "../components/Heading";
import { Alert, Skeleton } from "antd";
import catchResponseErr from "../utils/catchResponseErr";
import Container from "../components/Container";

function ProjectScreen() {
  const { id } = useParams();

  const {
    data: project,
    isLoading,
    error,
  } = useQuery(["project", id], async () => {
    const res = await baseUrl.get(`/projects/${id}`);
    return res.data.data;
  });

  useEffect(() => {
    // 👇️ scroll to top on
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Heading
        title={isLoading ? <Skeleton active /> : project?.title}
        subTitle={isLoading ? null : project?.subTitle}
        img={project?.photo}
      />
      <div className="mb-20">
        {isLoading ? (
          <div className="mb-10">
            <Skeleton active />
            <Skeleton active />
          </div>
        ) : error ? (
          <Alert message={catchResponseErr(error)} type="error" />
        ) : (
          <div className=" pt-5 mx-auto">
            {/* <div className="mb-5">
                <h3 className="heading-md lg:text-2xl m-0">{project.title}</h3>
                <p className=" text-gray mt-2 flex items-center gap-1 mb-5">
                  <BsCalendarDate />
                  {moment(project.date).format("MMM Do YY")}
                </p>
              </div> */}
            {/* <div>
                <p className="md:px-20 p-5 border-l-[4px] border-primary mb-5 text-gray-900 font-semibold">
                  {project.subTitle}
                </p>
              </div> */}

            {/* <div className="w-full overflow-hidden rounded-2xl max-h-[600px] mb-5">
                  <img
                    alt="Post thumbnail"
                    src={project.photo}
                    className="transition-all w-full h-full object-cover"
                  />
                </div> */}
            <div>{parse(project.content)}</div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ProjectScreen;
