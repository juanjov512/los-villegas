import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing["3xl"]}`};
  gap: ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;
  width: 100%;
  max-width: 35rem;
  min-height: auto;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: 0.3s ease-in-out;
  transition-property: background, transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.lg};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.green[50]};
    transform: scale(1.05);
    box-shadow: "0px 15px 30px rgba(0,0,0,0.1)";
  }
`;

const Title = styled.p`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green[700]};
  height: 90px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70px;
  }
`;

export { Container, Title, StyledFontAwesomeIcon };
