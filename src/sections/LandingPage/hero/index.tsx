import React, { type JSX } from "react";

import { Container } from "@/components/container/styles";
import ScrollDown from "@/components/scroll-down";

import { Description } from "./description";
import { Image } from "./logo";

const Hero: React.FC = (): JSX.Element => {
  return (
    <Container id={"home"}>
      <Description />
      <Image />
      <ScrollDown />
    </Container>
  );
};

export default Hero;
