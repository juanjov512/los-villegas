import React, { type JSX } from "react";

import { Text } from "@/components/text/styles";

import { Container, Title } from "./styles";

const Description: React.FC = (): JSX.Element => {
  const text = `Llevamos el auténtico plátano colombiano desde las fértiles 
  tierras del Eje Cafetero hasta su negocio, trabajando junto a agricultores 
  locales para garantizar frescura y calidad. Seleccionamos cada fruto en su 
  punto ideal de maduración y lo distribuimos de forma rápida y segura a 
  mayoristas, minoristas, restaurantes, supermercados y distribuidores, 
  asegurando un suministro constante y confiable.`;

  const title = `Nos preocupamos por las demandas de su negocio`;

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export { Description };
