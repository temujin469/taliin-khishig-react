import React from "react";
import Heading from "../components/Heading";

function AboutUs() {
  return (
    <div>
      <Heading
        title={"About us"}
        subTitle="Tal Hishig Mining LLC was established in 2017 with the
                investment of MU and China, and it has been operating for the
                second year."
        img={"/serviceImages/digital-10 1.png"}
      />
      {/* <!-- main-section start --> */}
      <div className="container max-w-[1100px] px-5 md:px-20 mb-20 mx-auto">
        <div>
          <p className="md:px-20 p-5 border-l-[4px] border-[#FE7200] mb-5 text-gray-900 font-semibold">
            Since its establishment, Our mission is to become the leading
            logistics contractor in Mongolia.
          </p>
        </div>
        <div>
          <p className="mb-10">
            O. Hongor said that they exported more than one million tons of
            mining products last year, but this is Link decrease compared to
            2019. When asked why, he said, "Our company increased its rolling
            stock with 400 new wagons in 2019. Since then, Mongolia has
            increased its capacity by 400 cars and "Darkhan Iron and Steel
            Plant" by 300 cars. Specifically, the number of wagons used in
            Mongolia has increased.
          </p>
          <p>
            As the capacity of the rolling stock increases, the transportation
            capacity increases, but the number of trains passing through Ereniy
            Port is still 14 according to the contract, so there will be no real
            change. But this year, "Taly Kishig" group is planning to export 1.5
            million tons of mining debri.
          </p>
        </div>
      </div>
      {/* <!-- main-section end --> */}

      {/* <!-- timeline start --> */}
      <div className="container bg-gray-200 mx-auto w-full my-20">
        <div>
          <p className="text-center text-2xl font-semibold">Our History</p>
        </div>
        <div className="relative wrap overflow-hidden md:p-10 p-5 h-full">
          <div className="z-20 flex items-center order-1 relative w-14 h-14 left-[50%] translate-x-[-50%] top-3">
            <img src="/images/grayLogo.png" alt="" />
          </div>
          <div
            className="border-2-2 absolute border-[#FE7200] h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900 absolute left-[-100px] ">
                2017
              </h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 py-4">
              <p className="font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Started our first transportation services of coal and iron ore.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900 absolute left-[100px] ">
                2018
              </h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 py-4">
              <p className="font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Increased number of rail wagons by 250 wagons.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900 absolute left-[-100px] ">
                2019
              </h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 py-4">
              <p className="font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Prospecting work of gold copper deposits in Bayankhongor
                province. Prospecting for fluorite deposit in Dornod province.
                Purchased 275 rail wagon from Republic of Estonia. "Jin Yun
                Mining" JSC was established.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900 absolute left-[100px] ">
                2020
              </h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 py-4">
              <p className="font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Prospecting works of iron ore deposits in Selenge province.
                Signed an transportation agreement with "Erdenes Tavan Tolgoi"
                JSC Purchased 120 rail wagon from Russia expanding our park to
                800 wagons. Holder of mining license of Selenge iron ore
                deposit.
              </p>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-gray-900 absolute left-[-100px] ">
                2021
              </h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 py-4">
              <p className="font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Awarded with "Growth of year" by Bloomberg TV Mongolia
              </p>
            </div>
          </div>
        </div>
        <div className="z-20 flex items-center order-1 relative w-14 h-14 left-[50%] translate-x-[-50%] top-[-20px]">
          <img src="/images/logo1.png" alt="" />
        </div>
      </div>
      {/* <!-- timeline end --> */}
    </div>
  );
}

export default AboutUs;
