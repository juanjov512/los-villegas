import React, { type JSX } from "react";

import Accordion from "@/components/accordion";
import { Container as MainContainer } from "@/components/container/styles";

import { Container, TextContainer, Title, ColumnContainer } from "./styles";

interface IAnswer {
  title: string;
  text: string;
}

const FOUNDATION_YEAR = 1973;

const Answers: React.FC = (): JSX.Element => {
  const title = "Preguntas Frecuentes";
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - FOUNDATION_YEAR;
  const answers: IAnswer[] = [
    {
      title: "¿Cómo garantizan la frescura de los plátanos?",
      text: `Seleccionamos cada fruto directamente en las fincas, asegurando 
      que llegue en su punto óptimo de maduración.`,
    },
    {
      title: "¿Pueden cumplir con entregas rápidas y puntuales?",
      text: `Sí, contamos con una logística optimizada que nos permite llegar 
      siempre a tiempo.`,
    },
    {
      title: "¿Qué tipo de relación ofrecen a sus clientes?",
      text: `Construimos relaciones de confianza, asegurando un suministro 
      constante y estable para su negocio.`,
    },
    {
      title: "¿Tienen experiencia en el sector agroalimentario?",
      text: `Sí, contamos con más de ${yearsInBusiness} años abasteciendo a 
      clientes con calidad garantizada.`,
    },
    {
      title: "¿Puedo conocer el origen de los plátanos que me entregan?",
      text: `Por supuesto, ofrecemos trazabilidad total desde el campo hasta 
      su negocio.`,
    },
  ];

  return (
    <MainContainer id={"faq"} $minHeight={"auto"}>
      <Container>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        <ColumnContainer>
          {answers.map(({ text, title }, index) => (
            <Container key={`answer-${index}`}>
              <Accordion content={text} title={title} />
            </Container>
          ))}
        </ColumnContainer>
      </Container>
    </MainContainer>
  );
};

export default Answers;
