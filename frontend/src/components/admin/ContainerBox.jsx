import React from "react";
import AdminHeading from "./AdminHeading";

function ContainerBox({ children }) {
  return (
    <div className="mt-[77px] md:mt-4 m-5 md:m-10">
      <div className="sm:p-10 min-h-[calc(100vh-185px)] sm:bg-white sm:dark:bg-secondary-dark-bg rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default ContainerBox;
