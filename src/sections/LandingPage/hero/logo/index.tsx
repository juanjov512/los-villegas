import { faForward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { type JSX } from "react";

import headerImg from "@/assets/images/header.png";

import {
  IconCircle,
  ImageContainer,
  ImageTag,
  LogoBase,
  StyledFontAwesomeIcon,
} from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <ImageContainer
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <LogoBase>
        <StyledFontAwesomeIcon icon={faForward} />
        <IconCircle />
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            scale: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.6, ease: "easeOut" },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
        >
          <ImageTag src={headerImg} alt="Logo" priority />
        </motion.div>
      </LogoBase>
    </ImageContainer>
  );
};

export { Logo as Image };
