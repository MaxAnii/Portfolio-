import React from "react";
import { Avatar } from "@nextui-org/react";
import twitter from "../assets/languageLogo/twitter.png";
import linkedin from "../assets/languageLogo/linkedin.png";
import github from "../assets/languageLogo/github.png";
import gmail from "../assets/languageLogo/gmail.png";
import discord from "../assets/languageLogo/discord.png";
const SocialMedia = () => {
  const icons = [twitter, linkedin, github, gmail, discord];
  return (
    <div className="flex justify-center md:gap-10 gap-5">
      {icons.map((elem, index) => {
        return (
          <Avatar
            className="md:w-16 md:h-16 text-large h-12 w-12 bg-white"
            isBordered
            radius="lg"
            src={elem}
          />
        );
      })}
    </div>
  );
};

export default SocialMedia;
