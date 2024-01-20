import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
const ProjectContainer = (props) => {
  const imageClassName = `md:pt-[10vh] lg:pt-0 lg:pl-5 px-3 pt-5 lg:order-${props.imageOrder}`;
  const descriptionClassName = `md:pl-10 pl-3 pt-5 lg:w-[40vw] lg:pt-0 lg:order-${props.descriptionOrder}`;
  return (
    <>
      <div className="md:pl-[10vw] md:pr-[10vw] lg:pt-[9vh] md:p-5 lg:overflow-hidden lg:flex">
        <div className={imageClassName}>
          <div className="" data-aos="zoom-in">
            <Image isBlurred src={props.image} className="lg:w-[40vw]"></Image>
          </div>
        </div>
        <div className={descriptionClassName}>
          <h3 className="text-3xl text-center md:text-left md:p-0 w-auto">
            {props.projectName}
          </h3>
          <p className="pt-5 text-center md:text-left text-xl">
            <b>Technologies :</b> {props.technologies}
            <br></br>
            {props.description}
          </p>
          <div className="flex justify-center gap-10 pt-5">
            <div>
              <Link
                to={props.github}
                target="_blank"
                className="text-[#ff5d56] "
              >
                Github
              </Link>
            </div>
            {props.liveDemo ? (
              <div>
                <Link
                  to={props.liveDemo}
                  target="_blank"
                  className="text-[#ff5d56] "
                >
                  Live Demo
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
