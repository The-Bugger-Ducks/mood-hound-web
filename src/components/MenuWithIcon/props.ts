import { IconType } from "react-icons";

export default interface MenuWithIcon {
  mainIcon: { icon: IconType; boxSize?: string; color?: string };
  hasBorder?: boolean;
  options: MenuOption[];
}

interface MenuOption {
  label: string;
  iconConfig?: { icon: IconType; boxSize?: string; color?: string };
  onClick: () => void;
}
