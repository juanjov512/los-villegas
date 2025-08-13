import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type JSX } from "react";

import { Button as StyledButton } from "./styles";

import type { IButtonComponentProps } from "./types";

const Button: React.FC<IButtonComponentProps> = ({
  text,
  icon,
  size = "lg",
  ...props
}: IButtonComponentProps): JSX.Element => {
  return (
    <StyledButton size={size} {...props}>
      {text}
      {icon && <FontAwesomeIcon color={"#fff"} icon={icon} />}
    </StyledButton>
  );
};

export default Button;
