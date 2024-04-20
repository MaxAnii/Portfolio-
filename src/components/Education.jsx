import React from "react";
import { Card, CardBody } from "@nextui-org/react";
const Education = () => {
	return (
		<div>
			<div className="text-center">
				<div className="text-center about md:text-5xl text-3xl">
					My Education
				</div>
				<div className="pt-2">
					Professional Profile - There Is All About My Education
				</div>
				<div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
					. . . .
				</div>
			</div>
			<div className="pt-[9vh] md:pl-[10vw] md:pr-[10vw]  p-5 lg:h-[830px]">
				<div
					className="bg-white/60  border-none rounded-xl mb-10  min-w-[50vw] lg:max-w-[50vw] "
					data-aos="fade-up"
					data-aos-anchor-placement="bottom-bottom"
				>
					<Card
						isBlurred
						className="border-none bg-background/60 dark:bg-default-100/50  "
						shadow="sm"
					>
						<CardBody>
							<div className="text-[#ff5d56] text-3xl pb-6">2020 - Present</div>
							<div className="text-xl font-bold">
								Bachelor's of Engineering - Computer Science & Engineering
							</div>
							<p>Mangalore Institute of Technoloy & Engineering.</p>
						</CardBody>
					</Card>
				</div>
				<div
					className="bg-white/60  border-none rounded-xl mb-10 min-w-[50vw] lg:max-w-[50vw] lg:float-right"
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
				>
					<Card
						isBlurred
						className="border-none bg-background/60 dark:bg-default-100/50  "
						shadow="sm"
					>
						<CardBody>
							<div className="text-[#ff5d56] text-3xl pb-6">2018 - 2019</div>
							<div className="text-xl font-bold">Senior Secondary (12th)</div>
							<p>
								Govt. Boys higher secondary school, Jawahar Nagar, Srinagar.
							</p>
						</CardBody>
					</Card>
				</div>
				<div
					className="bg-white/60  border-none rounded-xl lg:float-left min-w-[50vw] lg:max-w-[50vw]"
					data-aos="fade-up"
					data-aos-anchor-placement="center-center"
				>
					<Card
						isBlurred
						className="border-none bg-background/60 dark:bg-default-100/50  "
						shadow="sm"
					>
						<CardBody>
							<div className="text-[#ff5d56] text-3xl pb-6">2016-2017</div>
							<div className="text-xl font-bold">Secondary School (10th)</div>
							<p> Public High School, Kara Nagar, Srinagar.</p>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Education;
