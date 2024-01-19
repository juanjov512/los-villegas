import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { Size } from "../Text/types";

interface ICardProps {
  size: Size;
  title: string;
  text: string;
  button1Text?: string;
  button2Text?: string;
  button1Icon?: IconDefinition;
  button2Icon?: IconDefinition;
}

export type { ICardProps };
