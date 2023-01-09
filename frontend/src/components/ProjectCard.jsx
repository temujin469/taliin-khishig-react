import React from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div>
      <div className="rounded-lg border dark:border-slate-600 overflow-hidden max-w-[350px] hover:shadow-lg">
        <img
          src={project.photo}
          className="w-full h-[200px] object-cover"
          alt={`photo`}
        />
        <div className="bg-white dark:bg-secondary-dark-bg p-5">
          <p className="font-semibold mb-2 text-[17px] whitespace-normal md:h-[80px] overflow-hidden text-slate-800 dark:text-light-gray">
            {project.title.length > 88
              ? `${project.title.slice(0, 88)}...`
              : project.title}
          </p>
          <p className="text-[15px] md:h-[90px] mb-3 overflow-hidden text-slate-700 dark:text-light-gray/60">
            {project.subTitle.length > 200
              ? `${project.subTitle.slice(0, 200)}...`
              : project.subTitle}
          </p>
          <Link to={`/projects/${project.slug}`} className="flex items-end">
            <p className="text-primary hover:pr-2 duration-200">See more</p>
            <FiIcons.FiChevronRight className="text-primary text-[23px] pl-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
