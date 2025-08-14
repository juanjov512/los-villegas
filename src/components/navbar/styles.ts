import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled, { keyframes } from "styled-components";

const Nav = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.625rem 3rem;
  }
`;

const DesktopMenu = styled(NavigationMenu.Root)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(NavigationMenu.Link)`
  text-decoration: none;
  font-weight: 600;
  padding: 5px 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavItem = styled(NavigationMenu.Item)`
  position: relative;
  display: inline-block;
`;

const MobileTrigger = styled(Dialog.Trigger)`
  background: none;
  border: none;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileContent = styled(Dialog.Content)`
  background: #fff;
  padding: 2rem;
  position: fixed;
  top: 74px;
  left: 0;
  width: 100%;
  border: none;
  text-decoration: none;
  outline: none;
  z-index: 3;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);

  animation: ${keyframes`
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  `} 0.3s ease-out;
`;

const MobileLink = styled.a`
  display: block;
  padding: 10px 0;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export {
  Nav,
  DesktopMenu,
  NavLink,
  NavItem,
  MobileTrigger,
  MobileContent,
  MobileLink,
  StyledFontAwesomeIcon,
};
