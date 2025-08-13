import React, { type JSX } from "react";

import { Container, StyledFontAwesomeIcon, Title } from "./styles";
import { Text } from "../text/styles";

import type { ICardProps } from "./types";

const Card: React.FC<ICardProps> = ({
  text,
  title,
  icon,
}: ICardProps): JSX.Element => {
  return (
    <Container>
      {icon && <StyledFontAwesomeIcon icon={icon} />}
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export { Card };
