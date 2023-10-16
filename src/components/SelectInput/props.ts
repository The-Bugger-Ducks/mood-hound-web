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
  value?: string;
  options: InputOption[];
}

interface InputOption {
  id: string | number;
  value: string;
  label: string;
}
