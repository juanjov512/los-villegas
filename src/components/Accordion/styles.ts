import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { IContentProps } from "./types";

const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 28px 20px;
`;

const Content = styled.div<IContentProps>`
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  padding: ${props => (props.isOpen ? '22px 20px 28px' : '0 20px')}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: rgba(51, 51, 51, 0.3);
  height: 25px;
  transition: 0.3s ease-in-out;
  transition-property: opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.p`
  color: #000000;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 200%;
  letter-spacing: 0px;
  margin: 0;
`

const Text = styled.p`
  color: #525252;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0px;
  margin: 0;
`

export {Container, Header, Content, StyledFontAwesomeIcon, Text, Title}
