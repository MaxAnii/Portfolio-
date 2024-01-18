import React from "react";
import "../App.css";
import profile2 from "../assets/Profile/profile4.png";
import { Card, CardBody, Image } from "@nextui-org/react";
import BasicInformation from "./BasicInformation";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-center about md:text-5xl text-3xl">About Me</div>
        <div className="pt-2">Professional Profile - There Is All About Me</div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>

      <div className="md:flex md:pl-[10vw] pt-[9vh]">
        <div className="" data-aos="fade-right">
          <div className="sm:flex sm:justify-center px-[100px] pb-5 md:px-0">
            <Card className="py-4">
              <CardBody className="overflow-visible py-2">
                <Image
                  isZoomed
                  alt="Card background"
                  className="object-cover rounded-xl  md:w-[35vw] md:h-[60vh] lg:w-[30vw] lg:h-[70vh]"
                  src={profile2}
                />
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:pl-10 md:w-1/2 pl-3">
          <h3 className="text-3xl text-center md:text-left  md:p-0 w-auto ">
            I'm Ansar Ul Haq
          </h3>
          <p className="pt-5 text-center md:text-left text-xl">
            A self-taught web developer and a Computer Science student who
            enjoys exploring into the digital world. I began my adventure into
            web development out of personal interest, but it rapidly became an
            important aspect of my life.
          </p>
          <p className="mt-5 text-xl">
            I specialize in using the latest technology stack to create visually
            appealing and user-friendly websites. From design to functionality,
            I cover it all. I am always eager to learn and stay up-to-date with
            the latest technological developments, and offer fresh perspectives
            to every team or project I work on. Feel free to check out my
            portfolio to see the great projects I have worked on. Let's
            collaborate and create some amazing things in the IT industry!
          </p>
          <div className=" lg:block md:hidden ">
            <BasicInformation></BasicInformation>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden md:pl-[10vw] pb-20 ">
        <BasicInformation></BasicInformation>
      </div>
    </div>
  );
};

export default About;
