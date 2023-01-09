import React from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

function RailLogistic() {
  return (
    <Container>
      <Heading
        title={"Rail logistic"}
        subTitle="Tal Hishig Mining LLC was established in 2017 with the investment of MU
            and China, and it has been
            operating for the second year."
        img={"/serviceImages/digital-10 1.png"}
      />
      <div className="mb-20">
        <div>
          <p className="md:px-20 p-5 border-l-[4px] border-[#FE7200] mb-5 text-gray-900 font-semibold">
            Since its establishment, the group aims to export mining products
            independently, starting from extraction to the end user, and now has
            more than 1,000 wagons under contract for private and leased use.
          </p>
        </div>
        <div>
          <p className="mb-10">
            O. Hongor said that they exported more than one million tons of
            mining products last year, but this is a decrease compared to 2019.
            When asked why, he said, "Our company increased its rolling stock
            with 400 new wagons in 2019. Since then, Mongolia has increased its
            capacity by 400 cars and "Darkhan Iron and Steel Plant" by 300 cars.
            Specifically, the number of wagons used in Mongolia has increased.
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
    </Container>
  );
}

export default RailLogistic;
