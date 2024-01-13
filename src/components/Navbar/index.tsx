import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";

import { Nav, NavItem, NavLink, NavList, NavText } from "./styles";
import { INavbarProps } from "./types";
import Logo from "../Logo";
import { Button } from "../Button/styles";

const Navbar: React.FC<INavbarProps> = ({
  links,
}: INavbarProps): JSX.Element => {
  return (
    <Nav>
      <NavList>
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
      <Logo />
      <Button color={"secondary"}>
        Hablar con Ventas &nbsp;
        <FontAwesomeIcon icon={faPhoneFlip} />
      </Button>
    </Nav>
  );
};

export { Navbar };
