import React from "react";
import { Card, Input, Textarea } from "@nextui-org/react";
import SocialMedia from "./SocialMedia";
const Contact = () => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <div className="text-center about md:text-5xl text-3xl">
          Get in touch
        </div>
        <div className="pt-2">Feel free to drop me a line - Contact us</div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>
      <Card
        isBlurred
        className="border-none bg-white/10 md:mx-[10vw] lg:mx-[15vw] mx-4 mt-[9vh] p-6"
      >
        <div>
          <div className="flex   md:gap-10 gap-3">
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your email"
            />
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-[3vh] w-[100%]">
            <Input
              type="text"
              label="Subject"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your subject"
            />
          </div>
          <div className="pt-[3vh] w-[100%]">
            <Textarea
              type="text"
              isRequired
              label="Description"
              labelPlacement="outside"
              minRows="4"
              placeholder="How can i help you?"
            />
          </div>
        </div>
      </Card>
      <div className="md:mx-[10vw] mx-4 mt-[3vh] p-6">
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default Contact;
