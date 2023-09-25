import DateInputProps from "./props";
import { FC } from "react";

import {
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";

const DateInput: FC<DateInputProps> = ({
  label,
  isRequired,
  w,
  size,
  onChange,
  invalidController,
  isDisabled,
  defaultValue,
  inputType,
  value,
  onEnter,
}) => {
  const onEnterIsPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (onEnter) onEnter();
    }
  };

  return (
    <FormControl
      isRequired={isRequired ? isRequired : false}
      isInvalid={invalidController ? invalidController.isInvalid : false}
    >
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup w={w ?? "100%"} borderColor="gray.400" size={size ?? "lg"}>
        <Input
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
          onKeyDown={(event) => {
            if (onEnter) {
              onEnterIsPress(event);
            }
          }}
          type={inputType ?? "date"}
          disabled={isDisabled ?? false}
          defaultValue={defaultValue ?? ""}
          value={value}
        />
      </InputGroup>

      {invalidController?.isInvalid && (
        <Center>
          <FormHelperText color="red.500" textAlign="center">
            {invalidController?.invalidMessage}
          </FormHelperText>
        </Center>
      )}
    </FormControl>
  );
};

export default DateInput;
