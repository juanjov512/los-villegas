import {
  type IconDefinition,
  faBox,
  faStore,
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
      icon: faTruck,
      title: "Transporte Confiable",
      text: `Nos encargamos de recoger los plátanos directamente del campo y
      transportarlos a nuestro centro de distribución en Medellín. Contamos con
      una flota de vehículos adaptados para mantener la frescura y calidad del
      producto durante todo el trayecto.`,
    },
    {
      icon: faBox,
      title: "Empaque Seguro",
      text: `En nuestro centro de distribución, los plátanos son cuidadosamente
      seleccionados y empacados bajo estrictas normas de higiene y calidad.
      Garantizamos la frescura del producto hasta que llega a su destino
      final.`,
    },
    {
      icon: faStore,
      title: "Entrega Directa y Puntual",
      text: `Realizamos entregas directas en Medellín y sus alrededores.
      Nuestro equipo de logística asegura que los pedidos lleguen a tiempo y en
      perfectas condiciones, cumpliendo con las necesidades específicas de su
      negocio.`,
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
