import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxSlash } from "react-icons/rx";

function Heading({ title, subTitle, img }) {
  const breadcrumbNameMap = {
    "/about-us": "About Us",
    "/our-team": "Our team",
  };

  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url} className=" text-[16px] p-1 h-auto">
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/" className=" text-[16px] p-1 h-auto">
        Home
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="relative sm:px-10 lg:px-20">
      <div className="md:container mb-10 mx-5 md:mx-auto md:mt-[-80px] max-w-[1100px] mt-80 rounded-xl shadow-lg bg-white  ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="col-span-2 m-10">
            <Breadcrumb
              className="mb-3"
              separator={<RxSlash className="inline mb-1" />}
            >
              {breadcrumbItems}
            </Breadcrumb>
            <p className="text-3xl font-bold text-gray-900 mb-3">{title}</p>
            <p className="font-semibold text-gray-600">{subTitle}</p>
          </div>
          <div className="col-span-1 p-5">
            <img src={img} className="w-full block h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
