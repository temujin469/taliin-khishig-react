import React from "react";

function Subscribe() {
  return (
    <div className="flex md:px-5 flex-col-reverse md:flex-row items-center justify-center md:container md:mx-auto my-10">
      <div className="w-[75%] md:w-[60%]">
        <div className="bg-white shadow-md relative mt-[-80px] md:static md:mt-0 md:mx-0 rounded-lg overflow-hidden p-10 md:p-14 lg:pr-40">
          <p className="text-4xl text-gray-800 font-semibold mb-10 text-center">
            For inquiries
          </p>
          <p className="text-gray-600 mb-10 text-center md:text-start">
            Get news first. Stay in touch with our latest updates, investor news
            and media releases
          </p>
          <form className="flex flex-col">
            <label className="text-gray-600">Your Email address *</label>
            <input className="border-b-2 outline-none mb-10 p-2" />
            <button className="border-[#FE7200] mx-auto md:mx-0 text-[#FE7200] hover:text-white hover:bg-[#FE7200] border-2 rounded-lg w-fit py-1 px-10">
              Submit
            </button>
          </form>
        </div>
      </div>
      <img
        src="/images/Write-a-Professional-Email 1 (1).png"
        className="md:relative px-5 md:px-0 md:mt-0 md:ml-[-120px] md:hidden lg:block md:max-w-[30%] h-full"
      />
    </div>
  );
}

export default Subscribe;
