import React from "react";
import "../App.css";
import profile2 from "../assets/Profile2.jpg";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import BasicInformation from "./BasicInformation";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-center about">About Me</div>
        <div className="pt-2">Professional Profile - There Is All About Me</div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>

      <div className="md:flex md:pl-[10vw] py-[9vh]">
        <div className="md:w-[40vw] lg:w-auto">
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full md:w-auto"
                src={profile2}
              />
            </CardBody>
          </Card>

          <div className="invisible md:visible lg:hidden">
            <BasicInformation></BasicInformation>
          </div>
        </div>
        <div className=" md:pl-10 md:w-1/2 pl-3 mt-[-40vh] md:mt-0">
          <h3 className="text-3xl text-center md:text-left p-3 md:p-0 w-auto">
            I'm Ansar Ul Haq
          </h3>
          <p className="pt-5 text-center md:text-left">
            Et laboris sit labore aliqua sit est deserunt occaecat eiusmod minim
            cillum minim. Deserunt voluptate laboris veniam incididunt dolore
            veniam aute cillum cillum esse est cillum exercitation nostrud.
            Nostrud nulla culpa consectetur ad do esse quis id cillum
            deserunt.Reprehenderit mollit occaecat ullamco excepteur ea ad. Ad
            excepteur culpa elit culpa tempor culpa consequat Lorem dolor. Lorem
            ipsum dolor enim qui elit et laboris sit fugiat sunt. Aute fugiat
            dolore labore incididunt reprehenderit nostrud consequat qui ad
            minim ad esse ut. Et laboris sit labore aliqua sit est deserunt
            occaecat eiusmod minim cillum minim. Deserunt voluptate laboris
            veniam incididunt dolore veniam aute cillum cillum esse est cillum
            exercitation nostrud.
          </p>
          <div className=" lg:visible md:invisible">
            <BasicInformation></BasicInformation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
