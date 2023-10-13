import React from "react";
import Nav from "../components/Nav";

import Hero from "../components/Hero";
import About from "../components/About";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section id="HOME" className="  text-white">
        <Hero></Hero>
      </section>
      <section className=" pt-20" id="ABOUT">
        <About></About>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
