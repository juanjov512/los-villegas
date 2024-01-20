import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { Size } from "../Text/types";


interface IButtonProps {
  color: "primary" | "secondary";
  size?: Size;
}

interface IButtonComponentProps extends IButtonProps {
  text: string;
  icon?: IconDefinition;
}

export type { IButtonProps, IButtonComponentProps };
