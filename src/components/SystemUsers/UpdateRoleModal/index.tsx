import SearchModalProps from "./props";
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

const UpdateRoleModal: FC<SearchModalProps> = ({
  isOpen,
  onClose,
  confirmButton,
}) => {
  const [role, setRole] = useState<string | undefined>();

  const confirm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    confirmButton(role as UserRoleEnum);
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
              Gerenciar privilégios
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form onSubmit={(event) => confirm(event)}>
              <VStack spacing="1.5rem">
                <SelectInput
                  label="Indique o novo privilégio do usuário"
                  onChange={setRole}
                  isRequired={true}
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

                <Button type="submit">Confirmar</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UpdateRoleModal;
