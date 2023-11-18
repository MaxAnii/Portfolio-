import React from "react";
import "../App.css";
import resume from "../assets/resume.pdf";
import Typewriter from "typewriter-effect";
import { Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <div className=" p-4 bg-dark profile-photo px-[7vw] md:px-[10vw]">
      <div className="text-2xl pt-[32vh] ">Hi There! I'm</div>
      <div className="text-4xl h-20 md:text-5xl pt-5">
        <Typewriter
          options={{
            strings: ["TECH ALCHEMIST", "WEB DEVELOPER"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </div>
      <div className="lg:pt-[1vh] md:pt-[3vh] pt-[2vh] md:w-1/2 text-xl">
        Welcome to my digital realm, where I weave lines of code into
        captivating web experiences. With a passion for React and Node.js, I
        craft dynamic and responsive websites that bring ideas to life. Explore
        my portfolio to witness the art of technology in action. dreams and
        deliver exceptional user experiences.
      </div>
      <Button
        color="danger"
        variant="bordered"
        className=" text-[#ff5d56] mt-4 p-5"
      >
        <a href={resume} download>
          Download CV
        </a>
      </Button>{" "}
    </div>
  );
};

export default Hero;
