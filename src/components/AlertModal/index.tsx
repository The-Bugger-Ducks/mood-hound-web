import AlertModalProps from "./props";
import { FC } from "react";

import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const AlertModal: FC<AlertModalProps> = ({ isOpen, onClose, title, body }) => {
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
          <ModalHeader textAlign="center">
            <Text fontSize="lg" fontWeight="700">
              {title}
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Text fontSize="md" textAlign="center">
              {body}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AlertModal;
