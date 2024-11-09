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
import Blogs from "../sections/Blogs";
import Gradient from "../sections/Gradient";
import Footer from "../sections/Footer";


const Home = () => {
  return (
    <>
      <div  className="App lg:p-10 p-5 text-gray-600">
        <Navbar />
        <Hero />
        <Services />
        <Companies />
        <Portfolio />
        <Testimonials />
        <Statistics />
        <Subscribe />
        <OurTeam />
        <Contact />
        <Blogs />
        <Gradient />
      </div>
      <Footer />
    </>
  );
};

export default Home;
