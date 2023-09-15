import TextInputProps from "./props";

import { ChangeEvent, FC, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

const TextInput: FC<TextInputProps> = ({
  label,
  isRequired,
  w,
  size,
  placeholder,
  inputMode,
  iconLeftElement,
  onChange,
  invalidController,
  iconLeftAddon,
  isDisabled,
  defaultValue,
}) => {
  const [showValue, setShowValue] = useState(
    inputMode !== "alternateVisibility"
  );

  if (iconLeftElement && iconLeftAddon) {
    throw new Error(
      "It is not possible to create an input with both elements: iconLeftElement and iconLeftAddon. Please select only one."
    );
  }

  return (
    <FormControl
      isRequired={isRequired ? isRequired : false}
      isInvalid={invalidController ? invalidController.isInvalid : false}
    >
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup w={w ?? "100%"} borderColor="gray.400">
        {iconLeftAddon && (
          <InputLeftAddon>
            <Icon as={iconLeftAddon} color="black.800" />
          </InputLeftAddon>
        )}

        {iconLeftElement && (
          <InputLeftElement h="full">
            <Icon as={iconLeftElement} boxSize="1.2rem" color="gray.400" />
          </InputLeftElement>
        )}

        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange ? onChange(event.target.value) : console.log(event)
          }
          type={showValue ? "text" : "password"}
          placeholder={placeholder ? placeholder : "Insira um valor..."}
          size={size ?? "lg"}
          disabled={isDisabled ?? false}
          defaultValue={defaultValue ?? ""}
        />

        {inputMode === "alternateVisibility" && (
          <InputRightElement h="100%" w="20%">
            <Button
              onClick={() => setShowValue(!showValue)}
              colorScheme="gray"
              borderLeft="1px"
              borderColor="gray.400"
              roundedLeft="0"
              h="95%"
              w="95%"
            >
              <Icon
                as={showValue ? BsFillEyeSlashFill : BsFillEyeFill}
                boxSize="1.2rem"
                color="gray.700"
              />
            </Button>
          </InputRightElement>
        )}
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

export default TextInput;
