import {
  type IconDefinition,
  faBoxOpen,
  faSeedling,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import { Card } from "../../../components/card";
import { GridContainer } from "../../../components/container/styles";

interface IService {
  icon: IconDefinition;
  text: string;
  title: string;
}

const Services: React.FC = (): JSX.Element => {
  const services: IService[] = [
    {
      icon: faSeedling,
      title: "Recolección en origen",
      text: `Seleccionamos plátanos en su punto ideal de maduración 
      directamente en el campo.`,
    },
    {
      icon: faBoxOpen,
      title: "Clasificación y empaque",
      text: `Procesamos y empaquetamos siguiendo estándares de calidad.`,
    },
    {
      icon: faTruck,
      title: "Distribución ágil",
      text: `Transporte seguro y rápido desde nuestro centro de ditribución 
      hasta su ubicación.`,
    },
  ];

  return (
    <GridContainer id={"services"}>
      {services.map(({ icon, text, title }, index) => (
        <Card icon={icon} key={`card-${index}`} title={title} text={text} />
      ))}
    </GridContainer>
  );
};

export default Services;
