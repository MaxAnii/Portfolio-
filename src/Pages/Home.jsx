import React from "react";
import Nav from "../components/Nav";

import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section id="HOME" className="  text-white">
        <Hero></Hero>
      </section>
      <section className="py-20" id="ABOUT">
        <About></About>
      </section>
      <section id="EDUCATION" className="pt-20 ">
        <Education></Education>
      </section>
      <section id="SKILLS" className="pt-20 ">
        <Skills></Skills>
      </section>
    </div>
  );
};

export default Home;
