import React from "react";
import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div>
      <div className="">
        <div className="text-center">
          <div className="text-center about md:text-5xl text-3xl">
            My Experience
          </div>
          <div className="pt-2">
            Professional Profile - There Is All About My Education
          </div>
          <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
            . . . .
          </div>
        </div>
      </div>
      <div className="pt-[9vh] md:pl-[10vw] md:pr-[10vw] px-5">
        <div className="flex ">
          <div>
            <Divider className="ml-[-5vw]" orientation="vertical"></Divider>
          </div>
          <div>
            <ul className="list-disc ">
              <li className="py-5">
                <div>
                  <h3 className="text-3xl mb-5">
                    Karnataka State Pollution Control Board
                    <span className="text-right"> | Present</span>
                  </h3>
                  <p>
                    <div className="mb-3">
                      <b> Technologies :</b> React JS, Bootstrap, Node JS,
                      PostgreSQL, Express Framework and RESTful services.
                    </div>
                    During my internship at Varcons Technologies Pvt Ltd from, I
                    led a dynamic 5-member team in the development of "Leisure
                    Square," an extensive website template for a cafe. My role
                    encompassed spearheading collaborative efforts, overseeing
                    interactive web page creation, ensuring seamless alignment
                    between design briefs and client specifications for a
                    captivating online presentation.
                  </p>
                </div>
              </li>
              <Divider className="my-4" />
              <li>
                <div>
                  <h3 className="text-3xl mb-5">
                    Varcons Technologies Pvt Ltd
                  </h3>
                  <p>
                    <div className="mb-3">
                      <b> Technologies :</b> HTML, CSS, JavaScript, Bootstrap.
                    </div>
                    During my internship at Varcons Technologies Pvt Ltd from, I
                    led a dynamic 5-member team in the development of "Leisure
                    Square," an extensive website template for a cafe. My role
                    encompassed spearheading collaborative efforts, overseeing
                    interactive web page creation, ensuring seamless alignment
                    between design briefs and client specifications for a
                    captivating online presentation.
                  </p>
                  <div className="justify-center flex gap-8 my-5 ">
                    <div>
                      <Link
                        to="https://github.com/MaxAnii/LeisureSquare"
                        target="_blank"
                        className="text-[#ff5d56] "
                      >
                        Github
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="https://maxanii.github.io/LeisureSquare/"
                        target="_blank"
                        className="text-[#ff5d56] "
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
