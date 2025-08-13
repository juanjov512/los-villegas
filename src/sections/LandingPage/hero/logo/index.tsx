import { faForward } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { type JSX } from "react";

import {
  IconCircle,
  ImageContainer,
  LogoBase,
  StyledFontAwesomeIcon,
} from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <LogoBase>
        <StyledFontAwesomeIcon icon={faForward} />
        <IconCircle />
        <Image
          src="/images/header.png"
          alt="Logo"
          width={400}
          height={400}
          objectFit="cover"
        />
      </LogoBase>
    </ImageContainer>
  );
};

export { Logo as Image };
