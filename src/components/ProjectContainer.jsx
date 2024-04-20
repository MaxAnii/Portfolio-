import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
const ProjectContainer = (props) => {
	const [descriptionOrder, setDescriptionOrder] = useState("lg:order-1");
	const [imageOrder, setImageOrder] = useState("lg:order-2");

	useEffect(() => {
		if (props.order % 2 === 0) {
			setImageOrder("lg:order-1");
			setDescriptionOrder("lg:order-2");
		}
	}, []);

	return (
		<>
			<div className="md:px-[5vw] lg:mt-[9vh] md:p-5 lg:flex items-center my-[90px] md:my-0 px-3">
				<div className={` lg:pt-0 lg:pl-5 px-3 pt-5 ${imageOrder}`}>
					<div className="" data-aos="zoom-in">
						<Image isBlurred src={props.image} className="lg:w-[40vw]"></Image>
					</div>
				</div>
				<div className={`md:pl-10 pl-3  lg:w-[40vw]  ${descriptionOrder}`}>
					<h3 className="text-3xl text-center md:text-left mt-5">
						{props.projectName}
					</h3>
					<p className="pt-5  md:text-xl text-lg font-light">
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
