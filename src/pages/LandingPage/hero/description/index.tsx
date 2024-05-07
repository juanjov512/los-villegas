import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Card } from "../../../../components/Card";

import { Container } from "./styles";

const Description: React.FC = (): JSX.Element => {
  const text = `¡Directamente del campo a tu negocio, ofrecemos plátanos 
  hartón de la más alta calidad para satisfacer las demandas de tu 
  establecimiento!`;

  const title = `Plátanos frescos, calidad directa del campo`;

  return (
    <Container>
      <Card
        size={"large"}
        text={text}
        title={title}
        button1Text={"Contactar Ahora"}
        button1Icon={faPhoneFlip}
      />
    </Container>
  );
};

export { Description };
