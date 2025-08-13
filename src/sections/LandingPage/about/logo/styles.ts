import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CircleTextContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const CircleTextSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${rotate} 20s linear infinite;
`;

export { Container, CircleTextContainer, CircleTextSVG };
