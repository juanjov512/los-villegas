import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import Button from "@/components/button";
import { Text } from "@/components/text/styles";

import { Container, Title } from "./styles";

const FOUNDATION_YEAR = 1973;

const Description: React.FC = (): JSX.Element => {
  const getYearsSince1973 = () => new Date().getFullYear() - FOUNDATION_YEAR;

  const text = `Trabajamos desde 1973 para ofrecerle los plátanos de la mejor 
  calidad directamente del campo colombiano hasta su negocio. Con más de 
  ${getYearsSince1973()} años de experiencia, nos hemos consolidado como líderes 
  en la distribución de plátanos a nivel regional, trabajando de la mano de 
  nuestros clientes en Medellín y sus alrededores.`;

  const title = `Nosotros nos preocupamos por las demandas de su negocio`;

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button text={"Saber Más"} icon={faPlus} />
    </Container>
  );
};

export { Description };
