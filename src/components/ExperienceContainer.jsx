import React from "react";
import { Link } from "react-router-dom";
const ExperienceContainer = (props) => {
  return (
    <li className="py-5 pl-5">
      <div>
        <h3 className="text-3xl mb-2">{props.orgName}</h3>
        <div className="mb-3 text-xl italic">
          <span className="pr-5">{props.desgination} </span>
          <span className="">| </span>
          <span className="pl-5">{props.period}</span>
        </div>
        <p className="text-xl">{props.description}</p>
        <div className="mb-3 mt-3">
          <b> Technologies :</b> {props.technologies}
        </div>
        <div className="justify-center flex gap-8 my-5 ">
          {props.github && (
            <div>
              <Link
                to="https://github.com/MaxAnii/LeisureSquare"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Github
              </Link>
            </div>
          )}
          {props.liveDemo && (
            <div>
              <Link
                to="https://maxanii.github.io/LeisureSquare/"
                target="_blank"
                className="text-[#ff5d56] "
              >
                Live Demo
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ExperienceContainer;
