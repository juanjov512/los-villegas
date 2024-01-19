import React from "react";

import Button from "../Button";
import { Text, Title } from "../Text/styles";

import { ButtonsContainer, Container, TextContainer } from "./styles";
import type { ICardProps } from "./types";

const Card: React.FC<ICardProps> = ({
  size,
  text,
  title,
  button1Text,
  button2Text,
  button1Icon,
  button2Icon,
}: ICardProps): JSX.Element => {
  const buttonSize = button1Text && button2Text ? "medium" : "large";

  return (
    <Container>
      <TextContainer>
        <Title size={size}>{title}</Title>
        <Text size={size}>{text}</Text>
      </TextContainer>
      {button1Text || button2Text ? (
        <ButtonsContainer>
          {button1Text && (
            <Button
              color={"primary"}
              size={buttonSize}
              text={button1Text}
              icon={button1Icon}
            />
          )}
          {button2Text && (
            <Button
              color={"secondary"}
              size={buttonSize}
              text={button2Text}
              icon={button2Icon}
            />
          )}
        </ButtonsContainer>
      ) : null}
    </Container>
  );
};

export { Card };
