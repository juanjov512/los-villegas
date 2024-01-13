import styled from "styled-components";

const Nav = styled.nav`
  background-color: #fff;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 15px;
  height: 80px;
  padding: 10px 40px;
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 1;
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

export { Nav, NavList, NavItem, NavLink, NavText }