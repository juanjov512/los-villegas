import { faForward } from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import headerImg from "@/assets/images/header.png";

import {
  IconCircle,
  ImageContainer,
  ImageTag,
  LogoBase,
  StyledFontAwesomeIcon,
} from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <LogoBase>
        <StyledFontAwesomeIcon icon={faForward} />
        <IconCircle />
        <ImageTag src={headerImg} alt="Logo" priority />
      </LogoBase>
    </ImageContainer>
  );
};

export { Logo as Image };
