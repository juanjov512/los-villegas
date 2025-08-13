import { faForward, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import Button from "@/components/button";

import {
  Container,
  Description as ContainerDescription,
  StyledFontAwesomeIcon,
  Title,
} from "./styles";

const Description: React.FC = (): JSX.Element => {
  const text = `¡Directamente del campo a tu negocio, ofrecemos plátano 
  hartón de la más alta calidad para satisfacer las demandas de su 
  establecimiento!`;

  const title = `Plátanos frescos, calidad directa del campo`;

  return (
    <Container>
      <Title>{title}</Title>
      <ContainerDescription>{text}</ContainerDescription>
      <Button text={"Contactar Ahora"} icon={faPhoneFlip} />
      <StyledFontAwesomeIcon icon={faForward} />
    </Container>
  );
};

export { Description };
