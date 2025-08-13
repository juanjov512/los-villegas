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
`;

const Title = styled.p`
  font-family: Pattaya;
  font-size: 64px;
  font-weight: 400;
  line-height: 89px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
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
    left: 175px;
  }
`;

export { Container, Description, Title, StyledFontAwesomeIcon };
