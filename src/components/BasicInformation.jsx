import React from "react";

const BasicInformation = () => {
	return (
		<div className="md:flex text-left ">
			<div className="1">
				<div className="flex gap-2 ">
					<div className="material-symbols-outlined ">calendar_month</div>
					<div className="mt-6">
						<b> Date of birth: </b> 03 feb 2001
					</div>
				</div>
				<div className="flex gap-2">
					<div className="material-symbols-outlined">home</div>
					<div className="mt-6">
						<b> Address: </b>KASHMIR, INDIA
					</div>
				</div>
				<div className="flex gap-2">
					<div className="material-symbols-outlined">language</div>
					<div className="mt-6">
						<b> Spoken Language: </b> ENGLISH, URDU, HINDI, PUNJABI, KASHMIRI,
						HINKO
					</div>
				</div>
			</div>
			<div className="2">
				<div className="flex gap-2">
					<div className="material-symbols-outlined">flag</div>
					<div className="mt-6">
						<b> Nationality: </b> INDIA
					</div>
				</div>
				<div className="flex gap-2">
					<div className="material-symbols-outlined">email</div>
					<div className="mt-6">
						<b> Email: </b>ansarbaba2000@gmail.com
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicInformation;
