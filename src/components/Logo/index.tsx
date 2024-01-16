import React from "react";

import logo from "../../../resources/logo.png";

import { ImageContainer, ImageTag } from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <ImageTag src={logo} />
    </ImageContainer>
  );
};

export default Logo;
