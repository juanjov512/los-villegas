import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, type JSX, useEffect, useState } from "react";

import Button from "../button";
import Logo from "../logo";
import {
  Hamburger,
  Nav,
  NavItem,
  NavLink,
  NavList,
  NavText,
  StyledFontAwesomeIcon,
} from "./styles";
import { type INavbarProps } from "./types";

const Navbar: React.FC<INavbarProps> = ({
  links,
}: INavbarProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90 ? true : false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavList open={menuOpen}>
        <Fragment>
          {links.map((link, index) => (
            <NavItem key={index}>
              <NavLink href={link.href}>
                <NavText>{link.label}</NavText>
              </NavLink>
            </NavItem>
          ))}
        </Fragment>
      </NavList>
      <NavLink href={"#main"}>
        <Logo />
      </NavLink>
      {isMobile ? (
        <Hamburger onClick={toggleMenu}>
          <StyledFontAwesomeIcon open={menuOpen} icon={faChevronDown} />
        </Hamburger>
      ) : (
        <Button text={"Hablar con Ventas"} icon={faWhatsapp} />
      )}
    </Nav>
  );
};

export default Navbar;
