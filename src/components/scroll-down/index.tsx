import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { ScrollIndicator } from "./styles";

const ScrollDown = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const arrows = [0, 1, 2];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest <= 50);
  });

  return (
    <ScrollIndicator
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {arrows.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
          }}
        >
          <FontAwesomeIcon color="#6b7280" icon={faChevronDown} />
        </motion.div>
      ))}
    </ScrollIndicator>
  );
};

export default ScrollDown;
