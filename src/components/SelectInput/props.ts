export default interface SelectInputProps {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  w?: string;
  size?: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  invalidController?: {
    isInvalid: boolean;
    invalidMessage: string;
  };
  defaultValue?: string;
  options: { value: string; label: string }[];
}
