import React from "react";
import About from "../../components/sections/home/about/About";
import Contact from "../../components/sections/home/contact/Contact";
import Experience from "../../components/sections/home/experience/Experience";
import Faq from "../../components/sections/home/faq/Faq";

import Hero from "../../components/sections/home/hero/Hero";
import PeopleDriven from "../../components/sections/home/people-driven/PeopleDriven";
import Services from "../../components/sections/home/services/Services";
import Era from "../../components/sections/home/softwre-era/Era";
import ToolsTechnology from "../../components/sections/home/toolsandtechnology/ToolsTechnology";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Era />
      <Experience />
      <PeopleDriven />
      <ToolsTechnology />
      {/* <Faq />
      <Contact /> */}
    </>
  );
};

export default Home;
