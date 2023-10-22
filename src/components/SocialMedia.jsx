import React from "react";
import { Avatar } from "@nextui-org/react";
import twitter from "../assets/languageLogo/twitter.png";
import linkedin from "../assets/languageLogo/linkedin.png";
import github from "../assets/languageLogo/github.png";
import discord from "../assets/languageLogo/discord.png";
const SocialMedia = () => {
  const icons = [
    {
      img: discord,
      url: "https://discordapp.com/users/1164203541737513031",
    },
    { img: linkedin, url: "https://linkedin.com/in/ansar-ul-haq" },
    { img: github, url: "https://github.com/MaxAnii" },

    { img: twitter, url: "https://twitter.com/ansar__baba" },
  ];
  return (
    <div className="flex justify-center md:gap-10 gap-5">
      {icons.map((elem, index) => {
        return (
          <a href={elem.url} target="_blank" key={index}>
            <Avatar
              className="md:w-16 md:h-16 text-large h-12 w-12 bg-white hover:rotate-12"
              isBordered
              radius="lg"
              src={elem.img}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
