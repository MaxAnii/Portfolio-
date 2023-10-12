import React from "react";
import Nav from "../components/Nav";
import Profile1 from "../assets/Profile1.jpg";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section id="HOME" className="h-screen text-white mt-20">
        <div className="flex">
          <div className="p-6">Hello I'm Ansar</div>
          <div className="">
            <img src={Profile1} />
          </div>
        </div>
      </section>
      <section className="h-screen mt-20" id="ABOUT">
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
