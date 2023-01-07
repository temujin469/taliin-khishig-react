import React from "react";

const AdminHeading = ({ category, title }) => (
  <div className="mb-10">
    <p className="text-base sm:text-lg text-gray-400">{category}</p>
    <p className="text-lg dark:text-light-gray sm:text-2xl font-bold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default AdminHeading;
