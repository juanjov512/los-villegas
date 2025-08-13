import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React, { type JSX } from "react";

import { Container, Trigger, ChevronIcon, Content } from "./styles";

import type { IAccordionProps } from "./types";

const Accordion: React.FC<IAccordionProps> = ({
  content,
  title,
}: IAccordionProps): JSX.Element => {
  return (
    <Container type="single" collapsible>
      <AccordionPrimitive.Item value="item-1" style={{ width: "100%" }}>
        <AccordionPrimitive.Header>
          <Trigger>
            {title}
            <ChevronIcon className={"AccordionChevron"} icon={faChevronDown} />
          </Trigger>
        </AccordionPrimitive.Header>
        <Content>{content}</Content>
      </AccordionPrimitive.Item>
    </Container>
  );
};

export default Accordion;
