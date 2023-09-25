export default interface DateInputProps {
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  w?: string;
  size?: string;
  inputType?: "datetime-local" | "date" | "month";
  onChange?: (newValue: string) => void;
  value?: string;
  invalidController?: {
    isInvalid: boolean;
    invalidMessage: string;
  };
  defaultValue?: string;
  onEnter?: () => void;
}
