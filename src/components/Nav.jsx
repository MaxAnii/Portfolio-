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

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "EDUCATION",
    "SKILLS",
    "PROJECTS",
    "EXPERIENCE",
    "CONTACT",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
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
        <NavbarItem>
          <Link color="foreground" href="#HOME">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#ABOUT" color="foreground">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#EDUCATION">
            EDUCATION
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#SKILLS">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#PROJECTS">
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#EXPERIENCE">
            EXPERIENCE
          </Link>
        </NavbarItem>
        <NavbarItem>
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
