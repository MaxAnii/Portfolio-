import React from "react";
import Nav from "../components/Nav";

import Hero from "../components/Hero";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section id="HOME" className=" h-screen text-white pt-20">
        <Hero></Hero>
      </section>
      <section className="h-screen pt-20" id="ABOUT">
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
        <div className="bg-success h-10"></div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
