import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    top: -100px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`;

const slideItemIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideItemOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Nav = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  z-index: 4;
  ${(props) =>
    props.scrolled &&
    css`
      animation: ${slideIn} 0.5s ease-in-out;
      box-shadow: 0 4px 10px #0000001a;
      position: fixed;
    `}

  @media (max-width: 768px) {
    padding: 10px 40px;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  line-height: 15px;
  list-style: none;
  display: flex;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    top: 74px;
    left: 0;
    width: 100%;
    background-color: #e6e6e6;
    padding: 0 30px;

    visibility: hidden;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(-20px);
    ${(props) =>
      props.open
        ? css`
            animation: ${slideItemIn} 0.3s ease-in-out forwards;
            visibility: visible;
            transform: translateY(0);
            opacity: 1;
          `
        : css`
            animation: ${slideItemOut} 0.3s ease-in-out forwards;
          `}
  }
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavText = styled.p`
  color: #000;
  line-height: 22.5px;
  font-style: normal;
  font-weight: 600;
  height: 24px;
  margin: 0 10px;
  opacity: 1;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{ open: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export {
  Hamburger,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavText,
  StyledFontAwesomeIcon,
};
