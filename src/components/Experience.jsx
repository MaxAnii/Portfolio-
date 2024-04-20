import React, { useState } from "react";
import { Divider } from "@nextui-org/react";
import ExperienceContainer from "./ExperienceContainer";
const Experience = () => {
	const [experience, setExperience] = useState([
		{
			orgName: "Elogixa Pvt. Lmt. | Mangalore, Karnataka",
			desgination: "Software Developer Intern",
			period: "April 2024 - Present",
			description: `• As an intern at Elogixa, I contribute to the design and development of our Transportation Management System (TMS)
        using the latest technology stack.
        `,
			technologies:
				" Canva, Figma, Bootstrap, React JS, Node JS, MYSQL, Express Framework.",
		},
		{
			orgName: "Karnataka State Pollution Control Board | Mangalore, Karnataka",
			desgination: "Software Developer",
			period: "Jul 2023 - Dec 2023",
			description:
				"• Led development of user-friendly data management system for industries. Enabled input of crucial environmental metrics, including water and biodegradable waste. Designed advanced filtering options, resulting in a 30% reduction in time spent on data retrieval. Incorporated seamless Excel export functionality, improving user experience and productivity by 20%.",
			technologies:
				" Bootstrap, React JS, Node JS, Electron JS, PostgreSQL, Express Framework and RESTful services.",
		},
		{
			orgName: "Varcons Technologies Pvt Ltd | Bangalore, Karnataka",
			desgination: "Full Stack Intern",
			period: "Nov 2022 - Dec 2022",
			description:
				"• I led a team of 5 in the creation of the 'Leisure Square' café website.Managed team projects and developed a responsive website, fulfilling project deadlines with a 95% on-time rate.",
			technologies: "  HTML, CSS, JavaScript, Bootstrap.",
			github: "https://github.com/MaxAnii/LeisureSquare",
			liveDemo: "https://maxanii.github.io/LeisureSquare/",
		},
	]);
	return (
		<div>
			<div className="">
				<div className="text-center">
					<div className="text-center about md:text-5xl text-3xl">
						My Experience
					</div>
					<div className="pt-2">
						Professional Profile - There Is All About My Experience
					</div>
					<div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
						. . . .
					</div>
				</div>
			</div>
			<div className="pt-[9vh] md:pl-[10vw] md:pr-[10vw] px-5">
				<div className="flex ">
					<div>
						<Divider className="ml-[-15px]" orientation="vertical"></Divider>
					</div>
					<div>
						<ul className="list-disc ">
							{experience.map((elem, index) => {
								return (
									<div key={index}>
										<ExperienceContainer {...elem}></ExperienceContainer>
										{index !== experience.length - 1 && (
											<Divider
												className="ml-[-15px]"
												orientation="horizontal"
											></Divider>
										)}
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
