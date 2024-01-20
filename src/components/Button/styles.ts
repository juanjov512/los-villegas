import styled from "styled-components";
import { IButtonProps } from "./types";

const getBgColor = (props: IButtonProps) => {
  const { color } = props;

  switch (color) {
    case "primary":
      return "#59e4a8";
    case "secondary":
      return "#ffffff";
    default:
      return "#59e4a8";
  }
};


const getColor = (props: IButtonProps) => {
  const { color } = props;

  return color === "secondary" ? "#59e4a8" : "#ffffff";
};


const Button = styled.a<IButtonProps>`
  color: ${getColor};
  background-color: ${getBgColor};
  border: 2px solid #59e4a8;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transition-property: opacity, transform;
  text-align: center;
  font-weight: 500;
  max-height: 48px;
  width: ${(props) => (props.size === "large" ? "100%" : "auto")};
  min-width: 120px;
  box-shadow: 0 1px 8px rgba(0,0,0,.16);

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export { Button };