import { IconType } from "react-icons";

export default interface TextInputProps {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  w?: string;
  size?: string;
  placeholder?: string;
  inputMode?: "alternateVisibility" | "alwaysVisible";
  inputType?: "email" | "text";
  iconLeftElement?: IconType;
  onChange?: (newValue: string) => void;
  value?: string;
  invalidController?: {
    isInvalid: boolean;
    invalidMessage: string;
  };
  iconLeftAddon?: IconType;
  defaultValue?: string;
  onEnter?: () => void;
}
