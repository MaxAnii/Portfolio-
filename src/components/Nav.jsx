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
    "PROJECTS",
    "EXPERIENCE",
    "EDUCATION",
    "SKILLS",
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
        {menuItems.map((elem, index) => {
          return (
            <NavbarItem>
              <Link color="foreground" href={`#${elem}`}>
                {elem}
              </Link>
            </NavbarItem>
          );
        })}
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
