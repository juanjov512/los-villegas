import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  width: 100%;
  gap: 36px;
  height: 85vh;

  @media (max-height: 600px) {
    margin-top: 20px;
    height: auto;
    gap: 18px;
  }
`;

const Title = styled.h1`
  font-family: Pattaya;
  font-size: 64px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 48px;
    line-height: 48px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 42px;
    line-height: 42px;
    text-align: center;
  }
`;

const Description = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green[500]};
  bottom: 65px;
  left: 225px;
  position: relative;
  height: 52.5px;
  width: auto;

  animation: ${slideIn} 1s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: calc(225px * 0.85);
    height: calc(52.5px * 0.85);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: calc(225px * 0.6);
    height: calc(52.5px * 0.6);
  }
`;

export { Container, Description, Title, StyledFontAwesomeIcon };
