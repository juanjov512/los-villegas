import React from "react";

import { ImageContainer, ImageTag } from "./styles";
import headerLogo from "../../../../../resources/header-logo.jpg";

const Image: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <ImageTag src={headerLogo} alt="Header logo" />
    </ImageContainer>
  );
};

export { Image };
