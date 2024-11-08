import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Companies from "../sections/Companies";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Statistics from "../sections/Statistics";
import Subscribe from "../sections/Subscribe";
import OurTeam from "../sections/OurTeam";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <div className="bg-purple-100 rounded-2xl p-5 mx-auto mb-10">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Companies />
      <Portfolio />
      <Testimonials />
      <Statistics />
      <Subscribe />
      <OurTeam />
      <Contact />
    </>
  );
};

export default Home;
