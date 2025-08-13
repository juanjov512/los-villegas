import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";

import Logo from "../logo";
import {
  Nav,
  DesktopMenu,
  NavLink,
  MobileTrigger,
  MobileContent,
  MobileLink,
  StyledFontAwesomeIcon,
  NavItem,
} from "./styles";
import { type INavbarProps } from "./types";

const Navbar: React.FC<INavbarProps> = ({ links }) => {
  return (
    <Nav>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Link href={"#home"}>
            <Logo />
          </NavigationMenu.Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <DesktopMenu>
        <NavigationMenu.List>
          {links.map((link, i) => (
            <NavItem key={i}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </NavItem>
          ))}
        </NavigationMenu.List>
      </DesktopMenu>

      <Dialog.Root>
        <MobileTrigger asChild>
          <StyledFontAwesomeIcon icon={faBars} />
        </MobileTrigger>
        <Dialog.Portal>
          <MobileContent>
            <VisuallyHidden>
              <Dialog.Title>Menú de navegación</Dialog.Title>
            </VisuallyHidden>
            {links.map((link, i) => (
              <MobileLink key={i} href={link.href}>
                {link.label}
              </MobileLink>
            ))}
          </MobileContent>
        </Dialog.Portal>
      </Dialog.Root>
    </Nav>
  );
};

export default Navbar;
