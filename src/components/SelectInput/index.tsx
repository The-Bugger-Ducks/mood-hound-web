import SelectInputProps from "./props";

import { ChangeEvent, FC } from "react";

import {
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  Select,
} from "@chakra-ui/react";

const SelectInput: FC<SelectInputProps> = ({
  label,
  isRequired,
  w,
  size,
  placeholder,
  onChange,
  invalidController,
  isDisabled,
  defaultValue,
  options,
}) => {
  return (
    <FormControl
      isRequired={isRequired ? isRequired : false}
      isInvalid={invalidController ? invalidController.isInvalid : false}
    >
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup w={w ?? "100%"}>
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            onChange ? onChange(event.target.value) : console.log(event)
          }
          isRequired={isRequired ? isRequired : false}
          placeholder={placeholder ? placeholder : "Selecione uma opção..."}
          disabled={isDisabled ?? false}
          defaultValue={defaultValue ?? ""}
          borderColor="gray.400"
          focusBorderColor="teal.500"
          size={size ?? "lg"}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </Select>
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

export default SelectInput;
