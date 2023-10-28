import { Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
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
      title: "Deep Cock Sucker 🍆",
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
      title: "CSS",
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
      title: "Node JS",
      img: nodejs,
    },
  ];
  const framework = [
    {
      title: "Express JS",
      img: express,
    },
    {
      title: "React JS",
      img: react,
    },
  ];
  const libraries = [
    {
      title: "Bootstrap",
      img: bootstrap,
    },
    {
      title: "Tailwind CSS",
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
      <div className="md:ml-[10vw] md:mr-[10vw] md:grid md:grid-cols-2 lg:grid-cols-3 mt-[9vh] ">
        <div className="1 px-5 my-3 md:my-0">
          <Card className="py-4 px-5 ">
            <CardHeader className=" px-4 ">
              <h4 className="font-bold text-large text-[#ff5d56] text-center py-3 text-">
                Programing Language
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2  bg-white/5  rounded-lg">
              {programingLanguage.map((elem, index) => {
                return (
                  <div data-aos="fade-right" key={index}>
                    <div className="flex py-3">
                      <div className="avatar">
                        <Avatar
                          src={elem.img}
                          size="lg"
                          className="bg-white/90"
                        />
                      </div>
                      <div className="name pt-4 pl-5">{elem.title}</div>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </div>
        <div className="2 px-5 my-3 md:my-0">
          <Card className="py-4 px-5 ">
            <CardHeader className=" pt-2 px-4 ">
              <h4 className="font-bold text-large text-[#ff5d56] text-center py-3 ">
                Database
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 bg-white/5  rounded-lg">
              {database.map((elem, index) => {
                return (
                  <div data-aos="zoom-in" key={index}>
                    <div className="flex py-3">
                      <div className="avatar">
                        <Avatar
                          src={elem.img}
                          size="lg"
                          className="bg-white/90"
                        />
                      </div>
                      <div className="name pt-4 pl-5">{elem.title}</div>
                    </div>
                  </div>
                );
              })}
            </CardBody>

            <CardHeader className=" px-4 ">
              <h4 className="font-bold text-large text-[#ff5d56] text-center py-3 text-">
                Frame Work
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 bg-white/5  rounded-lg">
              {framework.map((elem, index) => {
                return (
                  <div data-aos="zoom-in" key={index}>
                    <div className="flex py-3">
                      <div className="avatar">
                        <Avatar src={elem.img} size="lg" />
                      </div>
                      <div className="name pt-4 pl-5">{elem.title}</div>
                    </div>
                  </div>
                );
              })}
            </CardBody>

            <CardHeader className="pb-0 pt-2 px-4 ">
              <h4 className="font-bold text-large text-[#ff5d56] text-center py-3 text-">
                Tools
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 bg-white/5  rounded-lg">
              {tools.map((elem, index) => {
                return (
                  <div data-aos="zoom-in" key={index}>
                    <div className="flex py-3">
                      <div className="avatar">
                        <Avatar
                          src={elem.img}
                          size="lg"
                          shadow="sm"
                          className="bg-yellow-100"
                        />
                      </div>
                      <div className="name pt-4 pl-5">{elem.title}</div>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </div>
        <div className="3 px-5 md:mt-3 lg:mt-0">
          <Card className="py-4 px-5">
            <CardHeader className="pb-0 pt-2 px-4 ">
              <h4 className="font-bold text-large text-[#ff5d56] text-center py-3 text-">
                Libraries
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 bg-white/5  rounded-lg">
              {libraries.map((elem, index) => {
                return (
                  <div data-aos="fade-left" key={index}>
                    <div className="flex py-3">
                      <div className="avatar">
                        <Avatar
                          src={elem.img}
                          size="lg"
                          className="bg-white/90"
                        />
                      </div>
                      <div className="name pt-4 pl-5">{elem.title}</div>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
