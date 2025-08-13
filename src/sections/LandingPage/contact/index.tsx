import Image from "next/image";
import React, { type JSX } from "react";

import PlatanosImg from "@/assets/images/platanos-maduros.jpg";
import Button from "@/components/button";
import { Container } from "@/components/container/styles";

import { Card, ImageContainer, Title, Text } from "./styles";

const Contact: React.FC = (): JSX.Element => {
  const text = `Si tienes alguna pregunta o deseas realizar un pedido, no dudes
  en contactarnos.`;
  const title = "!Llévanos en tu agenda!";

  return (
    <Container id={"contact"} $minHeight={"25rem"}>
      <ImageContainer>
        <Card>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <Button text={"Agendar"} color={"secondary"} size={"2xl"} />
        </Card>
        <Image
          src={PlatanosImg}
          alt="Logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </ImageContainer>
    </Container>
  );
};

export default Contact;
