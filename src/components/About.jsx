import React from "react";
import "../App.css";
import profile2 from "../assets/profile1-removebg-preview.png";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
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
          <div className="sm:flex sm:justify-center">
            <Card className="py-4">
              <CardBody className="overflow-visible py-2">
                <Image
                  isZoomed
                  alt="Card background"
                  className="object-cover rounded-xl w-full md:w-auto"
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
            My journey in web development has been nothing short of magical.
            Like an alchemist turning base elements into gold, I transform lines
            of code into interactive, visually stunning web applications. React
            and Node.js serve as my trusted tools, enabling me to breathe life
            into digital dreams and deliver exceptional user experiences.
          </p>
          <p className="mt-5 text-xl">
            I invite you to explore my portfolio and witness the fusion of
            technology and artistry. Whether you seek a dynamic web application,
            a visually engaging website, or an interactive user interface, I
            stand ready to turn your digital vision into reality. Let's embark
            on a transformative journey together, as I continue to channel my
            inner Tech Alchemist to shape the future of the web.
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
