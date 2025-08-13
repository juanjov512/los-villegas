import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";

type TSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface IButtonProps {
  color?: "primary" | "secondary";
  size?: TSize;
}

interface IButtonComponentProps extends IButtonProps {
  text: string;
  icon?: IconDefinition;
}

export type { IButtonProps, IButtonComponentProps };
