import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WaveTop = styled.div`
  width: 100%;
  line-height: 0;
  overflow: hidden;
  margin-bottom: -1px;
  margin-top: -6rem;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green[700]};
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: 3rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const CompanyName = styled.h3`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Row = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 20px;
  transition: transform 0.3s ease;

  ${Row}:hover & {
    transform: rotate(10deg);
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

const FooterBottomText = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export {
  Column,
  CompanyName,
  FooterBottomText,
  FooterContainer,
  FooterContent,
  MapWrapper,
  Row,
  StyledFontAwesomeIcon,
  WaveTop,
};
