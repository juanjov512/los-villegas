import Image from "next/image";
import React, { type JSX } from "react";

import LogoImg from "@/assets/images/logo.png";

import { ImageContainer } from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <Image
        src={LogoImg}
        alt="Logo"
        width={70}
        height={70}
        style={{ backgroundColor: "#fff" }}
      />
    </ImageContainer>
  );
};

export default Logo;
