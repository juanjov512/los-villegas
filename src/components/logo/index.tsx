import Image from "next/image";
import React, { type JSX } from "react";

import { ImageContainer } from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer>
      <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
    </ImageContainer>
  );
};

export default Logo;
