import FilterModalProps from "./props";
import DateInput from "../../DateInput";

import { FC, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const FilterModal: FC<FilterModalProps> = ({
  isOpen,
  onClose,
  confirmButton,
}) => {
  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();

  const [defaultDateStart, setDefaultDateStart] = useState<string>("");
  const [defaultDateEnd, setDefaultDateEnd] = useState<string>("");

  const [dateStartError, setDateStartError] = useState({
    hasError: false,
    messageError: "",
  });

  const [dateEndError, setDateEndError] = useState({
    hasError: false,
    messageError: "",
  });

  const confirm = () => {
    if (!isDatesValid()) return;
    confirmButton(dateStart, dateEnd);
    onClose();
  };

  const cancel = () => {
    onClose();
  };

  const updateDateStart = (stringDate: string) => {
    setDefaultDateStart(stringDate);

    if (stringDate) setDateStart(new Date(stringDate));
    if (!stringDate) setDateStart(undefined);
  };

  const updateDateEnd = (stringDate: string) => {
    setDefaultDateEnd(stringDate);

    if (stringDate) setDateEnd(new Date(stringDate));
    if (!stringDate) setDateEnd(undefined);
  };

  const isDatesValid = () => {
    setDateStartError({
      hasError: false,
      messageError: "",
    });

    setDateEndError({
      hasError: false,
      messageError: "",
    });

    if (!dateEnd && dateStart) {
      setDateEndError({
        hasError: true,
        messageError: "Selecione o fim do período.",
      });

      return false;
    }

    if (dateEnd && !dateStart) {
      setDateStartError({
        hasError: true,
        messageError: "Selecione o ínicio do período.",
      });

      return false;
    }

    if (dateEnd && dateStart && dateEnd < dateStart) {
      setDateStartError({
        hasError: true,
        messageError: "O ínicio do período deve ser antes do fim do período.",
      });

      setDateEndError({
        hasError: true,
        messageError: "O ínicio do período deve ser antes do fim do período.",
      });

      return false;
    }

    return true;
  };

  return (
    <Box position="absolute" zIndex={9999} w="100%">
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent p="1.5rem">
          <ModalHeader>
            <Text fontSize="lg" fontWeight="700">
              Filtrar métricas de performance
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <VStack spacing="1.5rem">
              <DateInput
                label="Início"
                inputType="date"
                defaultValue={defaultDateStart}
                onChange={updateDateStart}
                invalidController={{
                  invalidMessage: dateStartError.messageError,
                  isInvalid: dateStartError.hasError,
                }}
              />

              <DateInput
                label="Fim"
                inputType="date"
                defaultValue={defaultDateEnd}
                onChange={updateDateEnd}
                invalidController={{
                  invalidMessage: dateEndError.messageError,
                  isInvalid: dateEndError.hasError,
                }}
              />
            </VStack>

            <Flex gap="1rem" mt="1.5rem" justifyContent="flex-end">
              <Button colorScheme="gray" onClick={cancel}>
                Cancelar
              </Button>

              <Button onClick={confirm}>Confirmar</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FilterModal;
