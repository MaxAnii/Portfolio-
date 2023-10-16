import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import c from "../assets/languageLogo/c.ico";
import c1 from "../assets/languageLogo/c(1).ico";
import java from "../assets/languageLogo/java (1).ico";
import javascript from "../assets/languageLogo/javascript.ico";
import bootstrap from "../assets/languageLogo/bootstrap.ico";
import html from "../assets/languageLogo/html.ico";
import css from "../assets/languageLogo/css.ico";
import nodejs from "../assets/languageLogo/node-js (2).ico";
import mysql from "../assets/languageLogo/mysql.ico";
import postgresql from "../assets/languageLogo/postgresql.ico";
import react from "../assets/languageLogo/react.ico";
import typescript from "../assets/languageLogo/typescript.ico";
import express from "../assets/languageLogo/express-js.png";
import tailwind from "../assets/languageLogo/tailwind2.png";

const Skills = () => {
  const programingLanguage = [
    {
      title: "C",
      img: c,
    },
    {
      title: "C++",
      img: c1,
    },
    {
      title: "Java",
      img: java,
    },
    {
      title: "JavaScript",
      img: javascript,
    },
    {
      title: "TypeScript",
      img: typescript,
    },
    {
      title: "HTML",
      img: html,
    },

    {
      title: "Css",
      img: css,
    },
  ];
  const database = [
    {
      title: "MYSQl",
      img: mysql,
    },
    {
      title: "PostgreSQL",
      img: postgresql,
    },
  ];
  const tools = [
    {
      title: "Node js",
      img: nodejs,
    },
  ];
  const framework = [
    {
      title: "Express js",
      img: express,
    },
    {
      title: "React js",
      img: react,
    },
  ];
  const libraries = [
    {
      title: "Bootstrap",
      img: bootstrap,
    },
    {
      title: "Tailwind Css",
      img: tailwind,
    },
  ];
  return (
    <div className="">
      <div className="text-center">
        <div className="text-center about md:text-5xl text-4xl">My Skills</div>
        <div className="pt-2">
          Professional Profile - There Is All About My Skills
        </div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>
      <div className="lg:h-[55vh]  lg:overflow-y-scroll hide-scroll lg:pb-5 ">
        <div className="pt-[9vh] text-[#ff5d56] pl-[10vw] pb-[3vh] text-2xl">
          Programing Language
        </div>
        <div className="md:pl-[10vw] pr-[10vw] pl-[5%]">
          <div className="gap-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 w-fit h-fit">
            {programingLanguage.map((item, index) => (
              <Card shadow="sm" key={index} isPressable p-2>
                <CardBody className="overflow-visible p-0 bg-black/60 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className=" "
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small ">
                  <b className="text-center">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-[40px] text-[#ff5d56] pl-[10vw] pb-[3vh] text-2xl ">
          Database
        </div>
        <div className="md:pl-[10vw] pr-[10vw] pl-[5%]">
          <div className="gap-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10  w-fit h-fit">
            {database.map((item, index) => (
              <Card shadow="sm" key={index} isPressable p-2>
                <CardBody className="overflow-visible p-0 bg-black/60 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className=" "
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small ">
                  <b className="text-center">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-[40px] text-[#ff5d56] pl-[10vw] pb-[3vh] text-2xl">
          Tools
        </div>
        <div className="md:pl-[10vw] pr-[10vw] pl-[5%]">
          <div className="gap-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10  w-fit h-fit">
            {tools.map((item, index) => (
              <Card shadow="sm" key={index} isPressable p-2>
                <CardBody className="overflow-visible p-0 bg-black/60 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className=" "
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-sm ">
                  <b className="md:text-center">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-[40px] text-[#ff5d56] pl-[10vw] pb-[3vh] text-2xl">
          FrameWork
        </div>
        <div className="md:pl-[10vw] pr-[10vw] pl-[5%]">
          <div className="gap-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10  w-fit h-fit">
            {framework.map((item, index) => (
              <Card shadow="sm" key={index} isPressable p-2>
                <CardBody className="overflow-visible p-0 bg-black/60 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className=" "
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small ">
                  <b className="text-center">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-[40px] text-[#ff5d56] pl-[10vw] pb-[3vh] text-2xl">
          Libraries
        </div>
        <div className="md:pl-[10vw] pr-[10vw] pl-[5%]">
          <div className="gap-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10  w-fit h-fit">
            {libraries.map((item, index) => (
              <Card shadow="sm" key={index} isPressable p-2>
                <CardBody className="overflow-visible p-0 bg-black/60 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.title}
                    className=" "
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small ">
                  <b className="text-center">{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
