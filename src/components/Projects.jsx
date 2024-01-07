import React from "react";
import { Image } from "@nextui-org/react";
import shareexpense from "../assets/Project/shareexpense.png";
import projectmanager from "../assets/Project/projectManager2.png";
import checkYourHistory from "../assets/Project/checkYourHistory.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="">
      <div className="text-center">
        <div className="text-center about md:text-5xl text-3xl">
          My Projects
        </div>
        <div className="pt-2">
          Professional Profile - There Is All About My Projects
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
          <p className="pt-5 text-center md:text-left text-xl">
            <b>Technologies :</b> React JS, Bootstrap, Node JS, PostgreSQL,
            Express, Passport JS.<br></br> Empower your group's financial
            management with our website's interactive landing page. Create
            shared rooms, invite members, and seamlessly track expenses by
            creating and managing notes, ensuring transparency and ease in
            expense tracking.
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
      <div className="  md:pl-[10vw] md:pr-[10vw] lg:pt-[9vh] md:p-5 lg:overflow-hidden ">
        <div className="md:pt-[10vh] lg:pt-0 lg:float-right lg:pl-5 px-3 pt-5">
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
          <p className="pt-5 text-center md:text-left text-xl">
            <b> Technologies :</b> React JS, Bootstrap, Node JS, PostgreSQL,
            Express, S3. <br></br>This project facilitates efficient project
            management within a college ecosystem, enabling college
            administrators, HODs, professors, and students to collaborate
            seamlessly. It streamlines mentor selection, project approval, and
            project finalization processes, while also providing hierarchical
            visibility of ongoing projects tailored to each role.
          </p>
          <div className="flex justify-center gap-10 pt-5">
            <div>
              <Link
                to="https://github.com/MaxAnii/ProjectHarbor"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 md:pl-[10vw] md:pr-[10vw] pt-[9vh] p-5">
        <div className="md:pt-[10vh] lg:pt-0">
          <div className="" data-aos="zoom-in">
            <Image isBlurred src={checkYourHistory}></Image>
          </div>
        </div>
        <div className=" md:pl-10 pl-3 pt-5 ">
          <h3 className="text-3xl text-center md:text-left  md:p-0 w-auto ">
            Check Your History
          </h3>
          <p className="pt-5 text-center md:text-left text-xl">
            <b>Technologies :</b> React JS, Chrome API<br></br> Chromium-based
            browsers extension to access your history without leaving your
            active browser tab and allows you to delete the history of a
            specific site and you can see the top 10 most visited site in 3
            months
          </p>
          <div className="flex justify-center gap-10 pt-5">
            <div>
              <Link
                to="https://github.com/MaxAnii/Web-History-Extension"
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
