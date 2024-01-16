import React, { PropsWithChildren } from "react";

import { Button as StyledButton } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  ...props
}: PropsWithChildren<IButtonProps>): JSX.Element => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
