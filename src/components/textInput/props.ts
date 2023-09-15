import { IconType } from "react-icons";

export default interface TextInputProps {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  w?: string;
  size?: string;
  placeholder?: string;
  inputMode?: "alternateVisibility" | "alwaysVisible";
  iconLeftElement?: IconType;
  onChange?: (newValue: string) => void;
  invalidController?: {
    isInvalid: boolean;
    invalidMessage: string;
  };
  iconLeftAddon?: IconType;
  defaultValue?: string;
}
