import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FooterContainer = styled.div`
  color: white;
  text-align: center;
  display: flex;
  margin: 20px auto 0 auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green[700]};
  border-top: 2px solid rgb(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 20px;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyName = styled.h3`
  font-family: Poppins;
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: 110%;
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
  height: 24px;
  width: auto;
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
};
