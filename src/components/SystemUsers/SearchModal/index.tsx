import SearchModalProps from "./props";
import TextOrEmailInput from "../../TextOrEmailInput";
import SelectInput from "../../SelectInput";
import UserRoleEnum from "../../../utils/enums/userRole.enum";

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

const SearchModal: FC<SearchModalProps> = ({
  isOpen,
  onClose,
  confirmButton,
}) => {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [role, setRole] = useState<string | undefined>();

  const confirm = () => {
    confirmButton(name, email, role as UserRoleEnum);
    onClose();
  };

  const cancel = () => {
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
              Aplicar filtros na listagem
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <VStack spacing="1.5rem">
              <TextOrEmailInput
                label="Nome"
                onChange={setName}
                defaultValue={name}
              />

              <TextOrEmailInput
                label="E-mail"
                onChange={setEmail}
                defaultValue={email}
              />

              <SelectInput
                label="Privilégio"
                onChange={setRole}
                defaultValue={role}
                options={[
                  { value: UserRoleEnum.ADMIN, label: "ADMIN" },
                  { value: UserRoleEnum.VIEWER, label: "VIEWER" },
                ]}
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

export default SearchModal;
