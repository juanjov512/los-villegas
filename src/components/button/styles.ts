import styled from "styled-components";

import { type IButtonProps } from "./types";

const Button = styled.button<IButtonProps>`
  background-color: ${({ theme, color }) =>
    color === "secondary" ? theme.colors.yellow[600] : theme.colors.green[600]};
  border: none;
  display: inline-flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xl};
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme, size }) => theme.fontSizes[size!]};
  transition: 0.3s ease-in-out;
  transition-property: opacity, transform;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.16);
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export { Button };
