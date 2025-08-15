import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import PlantainLogoImg from "@/assets/images/plantain_logo.png";

import {
  Container,
  CircleTextContainer,
  CircleTextSVG,
  ImageTag,
} from "./styles";

const LogoWithText: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <Container ref={ref}>
      <CircleTextContainer>
        <CircleTextSVG style={{ rotate }} viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="#000" fontSize="11.6" fontFamily="Pattaya">
            <textPath xlinkHref="#circlePath">
              Los Villegas • Desde 1973 • Los Villegas • Desde 1973 •
            </textPath>
          </text>
        </CircleTextSVG>
        <ImageTag src={PlantainLogoImg} alt="Logo" />
      </CircleTextContainer>
    </Container>
  );
};

export default LogoWithText;
