import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70vw;
    height: 70vw;
    max-width: 360px;
    max-height: 360px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 15vw;
    height: 15vw;
    top: 15%;
    max-width: 75px;
    max-height: 75px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 10%;
    height: 7vw;
    max-height: 40px;
  }
`;

const ImageTag = styled(Image)`
  width: 440px;
  height: 440px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 55vw;
    height: 55vw;
    max-width: 290px;
    max-height: 290px;
  }
`;

export {
  IconCircle,
  ImageContainer,
  ImageTag,
  LogoBase,
  StyledFontAwesomeIcon,
};
