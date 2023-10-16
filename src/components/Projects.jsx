import React from "react";
import { Image } from "@nextui-org/react";
import shareexpense from "../assets/languageLogo/shareexpense.png";
import projectmanager from "../assets/languageLogo/projectmanager.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="">
      <div className="text-center">
        <div className="text-center about md:text-5xl text-3xl">
          My Projects
        </div>
        <div className="pt-2">
          Professional Profile - There Is All About My Education
        </div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 md:pl-[10vw] md:pr-[10vw] pt-[9vh] p-5">
        <div className="md:pt-[10vh] lg:pt-0">
          <div className="" data-aos="zoom-in">
            <Image isBlurred src={shareexpense}></Image>
          </div>
        </div>
        <div className=" md:pl-10 pl-3 pt-5 ">
          <h3 className="text-3xl text-center md:text-left  md:p-0 w-auto ">
            Share Expense
          </h3>
          <p className="pt-5 text-center md:text-left ">
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
          <div className="flex justify-center gap-10 pt-5">
            <div>
              <Link
                to="https://github.com/MaxAnii/Share-Expense"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Github
              </Link>
            </div>
            <div>
              <Link
                to="https://shareexpense.vercel.app"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  md:pl-[10vw] md:pr-[10vw] pt-[9vh] p-5 lg:h-[73vh]">
        <div className="md:pt-[10vh] lg:pt-0 lg:float-right lg:pl-5 pl-3 pt-5">
          <div className="" data-aos="zoom-in">
            <Image
              isBlurred
              src={projectmanager}
              className="lg:w-[40vw]"
            ></Image>
          </div>
        </div>
        <div className=" md:pl-10 pl-3 pt-5 lg:w-[40vw] lg:pt-0 lg:pl-0">
          <h3 className="text-3xl text-center md:text-left  md:p-0 w-auto ">
            Project Manager
          </h3>
          <p className="pt-5 text-center md:text-left lg:text-lg">
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
          <div className="flex justify-center gap-10 pt-5">
            <div>
              <Link
                to="https://github.com/MaxAnii/Project-Manager"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
