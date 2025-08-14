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
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 50px;
  }
`;

const Title = styled.h1`
  font-family: Pattaya;
  font-size: 7vh;
  font-weight: 400;
  line-height: 7vh;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    line-height: 6vh;
    text-align: center;
  }
`;

const Description = styled.h2`
  font-family: Poppins;
  font-size: 2.75vh;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    line-height: 3.5vh;
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
