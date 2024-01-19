import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import shareexpense from "../assets/Project/shareexpense.png";
import projectmanager from "../assets/Project/projectManager2.png";
import checkYourHistory from "../assets/Project/checkYourHistory.png";
import techNew from "../assets/Project/techNews.png";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  let imageOrder = 1;
  let descriptionOrder = 2;
  const [projectDetails, setProjectDetails] = useState([
    {
      projectName: "Share Expense",
      image: shareexpense,
      description:
        "Empower your group's financial management with our website's interactive landing page. Create shared rooms, invite members, and seamlessly track expenses by creating and managing notes, ensuring transparency and ease in expense tracking.",
      technologies:
        " React JS, Bootstrap, Node JS, PostgreSQL, Express, Passport JS.",
      github: "https://github.com/MaxAnii/Share-Expense",
      liveDemo: "https://shareexpense.vercel.app",
    },
    {
      projectName: "Project Harbor",
      image: projectmanager,
      description:
        "This project facilitates efficient project management within a college ecosystem, enabling college administrators, HODs, professors, and students to collaborate seamlessly. It streamlines mentor selection, project approval, and project finalization processes, while also providing hierarchical visibility of ongoing projects tailored to each role.",
      technologies: "  React JS, Bootstrap, Node JS, PostgreSQL, Express, S3.",
      github: "https://github.com/MaxAnii/ProjectHarbor",
    },
    {
      projectName: "Check Your History",
      image: checkYourHistory,
      description:
        "Chromium-based browsers extension to access your history without leaving your active browser tab and allows you to delete the history of a specific site and you can see the top 10 most visited site in 3 months",
      technologies: " React JS, Chrome API.",
      github: "https://github.com/MaxAnii/Web-History-Extension",
    },
    {
      projectName: "Tweet EveryDay",
      image: techNew,
      description:
        " Stay ahead with automated tweets delivering the freshest tech news right to your feed. From groundbreaking discoveries to industry trends, I've got you covered.Plus, enjoy the convenience of timely updates! TechNews Automate tweets the latest tech news every 4 hours, ensuring you stay in the loop effortlessly.",
      technologies: " Python, tweepy, newsapi",
      github: "https://github.com/MaxAnii/Tweet_EveryDay",
      liveDemo: "https://twitter.com/__TechNews",
    },
  ]);
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
      {projectDetails.map((elem, index) => {
        let temp = imageOrder;
        imageOrder = descriptionOrder;
        descriptionOrder = temp;
        return (
          <ProjectContainer
            key={index}
            {...elem}
            imageOrder={imageOrder}
            descriptionOrder={descriptionOrder}
          ></ProjectContainer>
        );
      })}
    </div>
  );
};

export default Projects;
