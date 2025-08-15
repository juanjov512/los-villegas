import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CircleTextContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 50vw;
    height: 50vw;
    max-width: 290px;
    max-height: 290px;
  }
`;

const CircleTextSVG = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImageTag = styled(Image)`
  width: 170px;
  height: 170px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25vw;
    height: 25vw;
    max-width: 150px;
    max-height: 150px;
  }
`;

export { Container, CircleTextContainer, CircleTextSVG, ImageTag };
