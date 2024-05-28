import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import {
  Container,
  Content,
  Header,
  StyledFontAwesomeIcon,
  Text,
  Title,
} from "./styles";
import { IAccordionProps } from "./types";

const Accordion: React.FC<IAccordionProps> = ({
  content,
  title,
}: IAccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header onClick={toggleAccordion}>
        <Title>{title}</Title>
        <StyledFontAwesomeIcon icon={isOpen ? faCircleMinus : faCirclePlus} />
      </Header>
      <Content isOpen={isOpen}>
        <Text>{content}</Text>
      </Content>
    </Container>
  );
};

export default Accordion;
