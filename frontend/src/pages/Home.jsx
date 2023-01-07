import React from "react";
import BusinessFacts from "../components/BusinessFacts";
import Greeting from "../components/Greeting";
import InfoSection from "../components/InfoSection";
import NewsSection from "../components/NewsSection";
import Partners from "../components/Partners";
import ProjectSection from "../components/ProjectSection";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
// Import Swiper styles
import "swiper/css";

function Home() {
  return (
    <div>
      <Services />
      <InfoSection />
      <Greeting />
      <ProjectSection />
      <BusinessFacts />
      <Partners />
      <NewsSection />
      <Subscribe />
    </div>
  );
}

export default Home;
