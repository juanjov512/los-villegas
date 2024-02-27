import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Card } from "../Card";
import { Container, LogoContainer } from "./styles";
import { IProductCardComponentProps } from "./types";

const ProductCard: React.FC<IProductCardComponentProps> = ({
  title,
  subtitle,
  icon,
}: IProductCardComponentProps): JSX.Element => {
  return (
    <Container>
      {icon && (
        <LogoContainer>
          <FontAwesomeIcon icon={icon} />
        </LogoContainer>
      )}
      <Card title={title} size={"medium"} text={subtitle} />
    </Container>
  );
};

export { ProductCard };
