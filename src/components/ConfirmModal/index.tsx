import ConfirmModalProps from "./props";

import { FC } from "react";
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
} from "@chakra-ui/react";

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  customConfirmButton,
  customCancelButton,
}) => {
  const confirm = () => {
    customConfirmButton.onClick();
    onClose();
  };

  const cancel = () => {
    if (customCancelButton) customCancelButton.onClick();
    onClose();
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
              {title}
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Text fontSize="md">{body}</Text>

            <Flex gap="1rem" mt="1.5rem" justifyContent="flex-end">
              <Button colorScheme="gray" onClick={cancel}>
                {customCancelButton?.label ?? "Cancelar"}
              </Button>

              <Button
                colorScheme={customConfirmButton?.color ?? "red"}
                onClick={confirm}
              >
                {customConfirmButton.label ?? "Prosseguir"}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConfirmModal;
