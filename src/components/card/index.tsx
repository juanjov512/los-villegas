import { motion } from "framer-motion";
import React from "react";

import { Container, StyledFontAwesomeIcon, Title } from "./styles";
import { Text } from "../text/styles";

import type { ICardProps } from "./types";

const Card: React.FC<ICardProps> = ({ text, title, icon }: ICardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        rotateX: -3,
        rotateY: 3,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{ perspective: 1000 }}
    >
      <Container>
        {icon && <StyledFontAwesomeIcon icon={icon} />}
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </motion.div>
  );
};

export { Card };
