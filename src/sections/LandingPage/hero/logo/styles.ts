import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(100%) rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(180deg);
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoBase = styled.div`
  width: 560px;
  height: 560px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green[100]};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    width: 460px;
    height: 460px;
  }
`;

const IconCircle = styled.div`
  top: 100px;
  left: 0;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green[700]};
  z-index: 2;
  transition: 0.3s ease-in-out;
  transition-property: opacity transform;

  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green[500]};
  left: 65px;
  top: 0;
  position: absolute;
  height: 52.5px;
  width: auto;
  transform: rotate(180deg);
  z-index: 3;

  animation: ${slideIn} 1s ease-out;
`;

const ImageTag = styled.img`
  position: relative;
  max-width: 100%;
  height: auto;
  z-index: 1;
`;

export {
  IconCircle,
  ImageContainer,
  ImageTag,
  LogoBase,
  StyledFontAwesomeIcon,
};
