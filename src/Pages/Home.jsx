import React from "react";
import Nav from "../components/Nav";

import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section id="HOME" className="  text-white pb-10">
        <Hero></Hero>
      </section>
      <section className="py-20" id="ABOUT">
        <About></About>
      </section>
      <section id="EDUCATION" className="pt-20 pb-10">
        <Education></Education>
      </section>
      <section id="SKILLS" className="pt-20 pb-10">
        <Skills></Skills>
      </section>
      <section id="PROJECTS" className="pt-20 pb-10">
        <Projects></Projects>
      </section>
      <section id="EXPERIENCE" className="pt-20  h-screen ">
        <div>fesfes</div>
      </section>
      <section id="CONTACT" className="pt-20  h-screen ">
        <div>fesfes</div>
      </section>
    </div>
  );
};

export default Home;
