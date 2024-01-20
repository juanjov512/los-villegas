import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Button as StyledButton } from "./styles";
import { IButtonComponentProps } from "./types";

const Button: React.FC<IButtonComponentProps> = ({
  text,
  icon,
  ...props
}: IButtonComponentProps): JSX.Element => {
  return (
    <StyledButton {...props}>
      {text} &nbsp;
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledButton>
  );
};

export default Button;
