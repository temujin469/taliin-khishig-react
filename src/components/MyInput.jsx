import React from "react";

function MyInput({ error, color, placeholder, type, title, onChange, value }) {
  return (
    <>
      {title ? (
        <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
          {title}
        </p>
      ) : null}
      <input
        type={type}
        className={`block w-full mb-5 outline-1 focus:outline-2 outline bg-transparent rounded-md py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
          error ? "outline-red-500" : undefined
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ transition: "all .15s ease", outline: color }}
      />
    </>
  );
}

export default MyInput;
