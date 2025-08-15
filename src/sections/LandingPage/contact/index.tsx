import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import React, { type JSX } from "react";

import PlatanosImg from "@/assets/images/platanos-maduros.jpg";
import Button from "@/components/button";
import { Container } from "@/components/container/styles";

import { Card, ImageContainer, Title, Text, StyledImage } from "./styles";

const Contact: React.FC = (): JSX.Element => {
  const title = "Siempre disponibles para su negocio";
  const text =
    "Un proveedor de confianza siempre a la mano. Guarde nuestro contacto ahora.";

  return (
    <Container id={"contact"} $minHeight={"25rem"}>
      <ImageContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <a href="tel:+573103581467" target="_blank" rel="noopener noreferrer">
            <Button
              text={"Agendar"}
              color={"secondary"}
              icon={faAddressBook}
              size={"2xl"}
            />
          </a>
        </Card>
        <StyledImage src={PlatanosImg} alt="Logo" fill />
      </ImageContainer>
    </Container>
  );
};

export default Contact;
