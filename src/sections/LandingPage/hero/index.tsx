import React, { type JSX } from "react";

import { Container } from "@/components/container/styles";

import { Description } from "./description";
import { Image } from "./logo";

const Hero: React.FC = (): JSX.Element => {
  return (
    <Container id={"home"}>
      <Description />
      <Image />
    </Container>
  );
};

export default Hero;
