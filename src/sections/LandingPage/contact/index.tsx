import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { type JSX } from "react";

import PlatanosImg from "@/assets/images/platanos-maduros.jpg";
import Button from "@/components/button";
import { Container } from "@/components/container/styles";

import { Card, ImageContainer, Title, Text } from "./styles";

const Contact: React.FC = (): JSX.Element => {
  const title = "Siempre disponibles para su negocio";
  const text =
    "Un proveedor de confianza siempre a la mano. Guarde nuestro contacto ahora.";

  return (
    <Container id={"contact"} $minHeight={"25rem"}>
      <ImageContainer>
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
