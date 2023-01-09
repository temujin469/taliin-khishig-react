import React from "react";
import Container from "./Container";

function Subscribe() {
  return (
    <Container bgColor={"#fff"}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-10 sm:py-20">
        <div className="w-[85%] md:w-[70%]">
          <div className="bg-white shadow-xl border relative mt-[-80px] md:static md:mt-0 md:mx-0 rounded-xl overflow-hidden p-8 sm:p-14 lg:pr-40">
            <p className="text-2xl sm:text-4xl text-gray-800 font-semibold mb-10 text-center">
              For inquiries
            </p>
            <p className="text-gray-600 mb-10 text-center md:text-start">
              Get news first. Stay in touch with our latest updates, investor
              news and media releases
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
          className="md:relative md:px-0 md:mt-0 md:ml-[-120px] md:hidden lg:block md:max-w-[500px] h-full"
        />
      </div>
    </Container>
  );
}

export default Subscribe;
