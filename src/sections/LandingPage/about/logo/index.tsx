import Image from "next/image";
import React from "react";

import PlantainLogoImg from "@/assets/images/plantain_logo.png";

import { Container, CircleTextContainer, CircleTextSVG } from "./styles";

const LogoWithText: React.FC = () => {
  return (
    <Container>
      <CircleTextContainer>
        <CircleTextSVG viewBox="0 0 100 100">
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
        <Image
          src={PlantainLogoImg}
          alt="Logo"
          width={170}
          height={170}
          placeholder="blur"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </CircleTextContainer>
    </Container>
  );
};

export default LogoWithText;
