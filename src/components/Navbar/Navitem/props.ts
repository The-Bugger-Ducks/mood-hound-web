import { IconType } from "react-icons";

export default interface NavitemProps {
  id: string | number;
  title?: string;

  subitems: {
    id: string | number;
    title: string;
    icon: IconType;
    onClick: () => void;
  }[];
}
