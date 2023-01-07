import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

function OurTeam() {
  return (
    <div>
      <Heading
        title={"Our team"}
        subTitle="Tal Hishig Mining LLC was established in 2017 with the
                investment of MU and China, and it has been operating for the
                second year.
              "
        img={
          "https://static.vecteezy.com/system/resources/previews/003/177/377/original/join-our-team-concept-with-team-people-working-together-free-vector.jpg"
        }
      />
      {/* <!-- main-section start --> */}
      <div className="container max-w-[1100px] px-5 md:px-20 mx-auto">
        <div>
          <p className="md:px-20 p-5 border-l-[4px] border-[#FE7200] mb-5 text-gray-900 font-semibold">
            Since its establishment, the group aims to export mining products
            independently, starting from extraction to the end user, and now has
            more than 1,000 wagons under contract for private and leased use.
          </p>
        </div>
      </div>
      {/* <!-- main-section end --> */}

      {/* <!-- section start --> */}
      <div className=" flex px-5 flex-col md:flex-row items-center justify-center md:container md:mx-auto my-10 mb-20">
        <div className="px-5 md:px-0 md:relative md:mr-[-150px] md:z-30 md:w-[50%]">
          <div className="bg-white shadow-md relative md:static md:mt-0 md:mx-0 rounded-lg overflow-hidden p-8 md:p-12">
            <p className="text-4xl text-gray-800 font-semibold mb-5">
              Khongor Ochirsukh
            </p>
            <p className="text-gray-600 text-3xl mb-3 text-center md:text-start">
              Chief Executive Officer
            </p>
            <p className="text-gray-600 mb-10 text-center md:text-start">
              Khongor has been Link CEO of Taliin Khishig Mining since September
              2017.
            </p>
          </div>
        </div>
        <img
          src="/images/greeting.png"
          className="md:w-[50%] z-20 object-cover rounded-lg px-10 md:px-0  max-h-[500px]"
        />
      </div>
      {/* <!-- section start --> */}

      {/* <!-- section start --> */}
      <div className="bg-white">
        <ul className="md:container max-w-[900px] mx-auto px-10 md:px-20  py-20 flex flex-col justify-center items-center md:flex-row gap-5">
          <li className="min-h-[300px] rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
            <img
              src="/wh/img3.png"
              className="w-full h-[60%] object-cover"
              alt=""
            />
            <div className="h-[40%] p-5">
              <p className="font-semibold text-lg mb-2">G.Oyun-Erdene</p>
              <Link to="#" className="text-sm">
                Chief Financial Officer
              </Link>
            </div>
          </li>
          <li className="min-h-[300px] rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
            <img
              src="/wh/img3.png"
              className="w-full h-[60%] object-cover"
              alt=""
            />
            <div className="h-[40%] p-5">
              <p className="font-semibold text-lg mb-2">G.Oyun-Erdene</p>
              <Link to="#" className="text-sm">
                Chief Financial Officer
              </Link>
            </div>
          </li>
          <li className="min-h-[300px] rounded-xl border overflow-hidden shadow-sm hover:shadow-lg">
            <img
              src="/wh/img3.png"
              className="w-full h-[60%] object-cover"
              alt=""
            />
            <div className="h-[40%] p-5">
              <p className="font-semibold text-lg mb-2">G.Oyun-Erdene</p>
              <Link to="#" className="text-sm">
                Chief Financial Officer
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- section end --> */}
    </div>
  );
}

export default OurTeam;
