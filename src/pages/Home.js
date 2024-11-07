import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";

const Home = () => {
  return (
    <>
      <div className="bg-purple-100 rounded-2xl p-2 lg:p-10 mx-auto mb-10">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </>
  );
};

export default Home;
