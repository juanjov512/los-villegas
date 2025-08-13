import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const FooterContainer = styled.div`
  color: white;
  text-align: center;
  display: flex;
  margin: 20px auto 0 auto;
  flex-direction: column;
  background-color: #2E7D32;
  border-top: 10px solid #1B5E20;

`;

const WaveSvg = styled.svg`
  width: 100%;
  height: auto;
  border-top: 10px #000;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyName = styled.h2`
  font-family: Poppins;
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: 89px;
  letter-spacing: 2px;
`;

const Row = styled.a`
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CompanyInfo = styled.div`
  text-align: center;
`;

const FooterBottomText = styled.div`
  padding: 20px 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  height: 20px;
`;

export {
  Column,
  CompanyInfo, 
  CompanyName, 
  FooterBottomText, 
  FooterContainer, 
  FooterContent, 
  Row,
  StyledFontAwesomeIcon,
  WaveSvg, 
};
