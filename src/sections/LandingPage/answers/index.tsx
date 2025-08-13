import React, { type JSX } from "react";

import Accordion from "@/components/accordion";
import { Container as MainContainer } from "@/components/container/styles";

import { Container, TextContainer, Title, ColumnContainer } from "./styles";

interface IAnswer {
  title: string;
  text: string;
}

const Answers: React.FC = (): JSX.Element => {
  const title = "Preguntas Frecuentes";
  const answers: IAnswer[] = [
    {
      title: "¿De dónde provienen los plátanos?",
      text: `Nuestros plátanos provienen de diversas regiones de Antioquia,
      asegurando la mejor calidad y frescura.`,
    },
    {
      title: "¿Realizan entregas a domicilio?",
      text: `Sí, realizamos entregas directas a restaurantes, supermercados y
      tiendas en Medellín y sus alrededores.`,
    },
    {
      title: "¿Cuál es el tiempo de entrega?",
      text: `El tiempo de entrega varía según la ubicación, pero generalmente
      los pedidos se entregan en un plazo de 24 a 48 horas.`,
    },
    {
      title: "¿Qué métodos de pago aceptan?",
      text: `Aceptamos transferencias bancarias y pagos en efectivo al momento
      de la entrega.`,
    },
  ];

  return (
    <MainContainer id={"faq"} minHeight={"auto"}>
      <Container>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        <ColumnContainer>
          {answers.map(({ text, title }, index) => (
            <Container>
              <Accordion key={index} content={text} title={title} />
            </Container>
          ))}
        </ColumnContainer>
      </Container>
    </MainContainer>
  );
};

export default Answers;
