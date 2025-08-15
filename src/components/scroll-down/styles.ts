import { motion } from "framer-motion";
import styled from "styled-components";

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: black;

  span {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    opacity: 0.7;
  }
`;

export { ScrollIndicator };
