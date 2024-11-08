import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Companies from "../sections/Companies";

const Home = () => {
  return (
    <>
      <div className="bg-purple-100 rounded-2xl p-5 mx-auto mb-10">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Companies />
    </>
  );
};

export default Home;
