import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const noActiveItem = {
    home: false,
    about: false,
    education: false,
    skills: false,
    projects: false,
    experience: false,
  };
  const [activeNavItem, setActiveNavItem] = useState({
    ...noActiveItem,
    about: true,
  });
  const menuItems = [
    "HOME",
    "ABOUT",
    "EDUCATION",
    "SKILLS",
    "PROJECTS",
    "EXPERIENCE",
    "CONTACT",
  ];
  const handleChange = (navItem) => {};
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-danger",
        ],
      }}
    >
      <NavbarContent className="">
        <NavbarBrand className="text-left">
          <h1 className="pt-[1vh]">
            <span className="text-[#ff5d56] fname text-[34px] md:text-[48px]">
              ANSAR{" "}
            </span>
            <span className=" fname text-[34px] md:text-[48px]">UL HAQ</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="md:hidden hidden  gap-4 pl-20  lg:flex"
        justify="center"
      >
        <NavbarItem
          onClick={() => handleChange("home")}
          isActive={activeNavItem.home}
        >
          <Link color="foreground" href="#HOME">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("about")}
          isActive={activeNavItem.about}
        >
          <Link href="#ABOUT" color="foreground">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("education")}
          isActive={activeNavItem.education}
        >
          <Link color="foreground" href="#EDUCATION">
            EDUCATION
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("skills")}
          isActive={activeNavItem.skills}
        >
          <Link color="foreground" href="#SKILLS">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("project")}
          isActive={activeNavItem.projects}
        >
          <Link color="foreground" href="#PROJECTS">
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("experience")}
          isActive={activeNavItem.experience}
        >
          <Link color="foreground" href="#EXPERIENCE">
            EXPERIENCE
          </Link>
        </NavbarItem>
        <NavbarItem
          onClick={() => handleChange("contact")}
          isActive={activeNavItem.contact}
        >
          <Link color="foreground" href="#CONTACT">
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          className="lg:hidden "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="bg-dark text-white ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-dark toggle"
              href={"#" + item}
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
