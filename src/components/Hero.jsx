import React from "react";
import "../App.css";
import resume from "../assets/resume.pdf";
import Typewriter from "typewriter-effect";
import { Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <div className=" p-4 bg-dark profile-photo px-[7vw] md:px-[10vw]  md:pt-[45vh] pt-[10vh]">
      <div className="text-2xl md:pt-[2vh] pt-[40vh]">Hi There! I'm</div>
      <div className="text-3xl h-20 md:text-5xl md:pt-5 text-[#ff5d56] pt-3">
        <Typewriter
          options={{
            strings: ["TECH ALCHEMIST", "WEB DEVELOPER"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </div>
      <div className="lg:pt-[1vh] md:pt-[3vh] pt-[1vh]  text-xl">
        Welcome to my digital universe! I specialise in translating lines of
        code into engaging software development. With a passion for React and
        Node.js, I build dynamic and responsive websites that bring ideas to
        life. You may go through my portfolio to see the beauty of technology in
        action and how I attempt to achieve my goals.
      </div>
      <Button
        color="danger"
        variant="bordered"
        className=" text-[#ff5d56] mt-5 p-5"
      >
        <a href={resume} download>
          Download CV
        </a>
      </Button>{" "}
    </div>
  );
};

export default Hero;
