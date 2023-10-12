import React from "react";
import "../App.css";
import profile from "../assets/Profile1.jpg";
import Typewriter from "typewriter-effect";
import { Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <div className="min-h-screen p-4 bg-dark profile-photo px-[7vw] md:px-[10vw]">
      <div className="text-2xl pt-[32vh] ">Hi There! I'm</div>
      <div className="text-4xl h-20 md:text-5xl">
        <Typewriter
          options={{
            strings: [
              "REACT DEVELOPER",
              "BACKEND DEVELOPER",
              "FULL STACK DEVELOPER",
            ],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </div>
      <div className="lg:pt-[2vh] md:pt-[5vh] pt-[4vh] md:w-1/2">
        loExercitation aliqua eiusmod nisi consectetur reprehenderit aliqua
        minim. Exercitation ex ea labore ad adipisicing cupidatat cupidatat
        reprehenderit incididunt reprehenderit adipisicing commodo minim
        nostrud.
      </div>
      <Button
        color="danger"
        variant="bordered"
        className=" text-[#ff5d56] mt-4 p-5"
      >
        Download CV
      </Button>
    </div>
  );
};

export default Hero;
