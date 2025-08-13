import React, { type JSX } from "react";

import { Container } from "@/components/container/styles";

import { Description } from "./description";
import { Image } from "./logo";

const Hero: React.FC = (): JSX.Element => {
  return (
    <Container id={"main"} padding={"60px 0 0"}>
      <Description />
      <Image />
    </Container>
  );
};

export default Hero;
