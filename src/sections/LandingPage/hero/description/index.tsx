import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import Button from "@/components/button";

import {
  Container,
  Description as ContainerDescription,
  StyledFontAwesomeIcon,
  Title,
} from "./styles";

const Description: React.FC = (): JSX.Element => {
  const text = `¡Directamente del campo a su negocio, ofrecemos 
  plátano hartón de la más alta calidad, con sabor, frescura 
  y una logística ágil y confiable en cada entrega!`;

  const title = `Plátanos frescos, calidad directa del campo`;

  return (
    <Container>
      <Title>{title}</Title>
      <ContainerDescription>{text}</ContainerDescription>
      <a
        href="https://wa.me/573103581467?text=Hola%2C%20quiero%20asegurar%20mi%20suministro%20de%20plátano%20para%20mi%20negocio."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text={"Contactar Ahora"} icon={faWhatsapp} />
      </a>
      <StyledFontAwesomeIcon icon={faForward} />
    </Container>
  );
};

export { Description };
