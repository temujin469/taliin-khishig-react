import React from "react";
import * as FiIcons from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div>
      <div className="rounded-lg border overflow-hidden max-w-[400px] ">
        <img
          src={`/upload/${project.photo}`}
          className="w-full h-[200px] object-cover"
          alt={`${project.photo}`}
        />
        <div className=" p-5">
          <p className="font-semibold mb-2 text-[17px] whitespace-normal md:h-[80px] overflow-hidden ">
            {project.title.length > 88
              ? `${project.title.slice(0, 88)}...`
              : project.title}
          </p>
          <p className="text-[15px] md:h-[90px] mb-3 overflow-hidden">
            {project.subTitle.length > 200
              ? `${project.subTitle.slice(0, 200)}...`
              : project.subTitle}
          </p>
          <a href="#" className="flex items-end">
            <p className="text-primary hover:pr-2 duration-200">See more</p>
            <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
