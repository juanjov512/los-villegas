import React, { type JSX } from "react";

import { Container } from "@/components/container/styles";

import { Description } from "./description";
import LogoWithText from "./logo";
import { CardContainer } from "./styles";

const About: React.FC = (): JSX.Element => {
  return (
    <Container $minHeight={"auto"} id={"about"}>
      <CardContainer>
        <LogoWithText />
        <Description />
      </CardContainer>
    </Container>
  );
};

export default About;
