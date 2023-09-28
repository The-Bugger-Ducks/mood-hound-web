import TextOrEmailInput from "../../components/TextOrEmailInput";
import SelectInput from "../../components/SelectInput";
import UserRoleEnum from "../../utils/enums/userRole.enum";
import ConfirmModal from "../../components/ConfirmModal";
import userRequests from "../../utils/requests/user.requests";
import RoutesEnum from "../../utils/enums/routes.enum";
import userRoleHandler from "../../utils/handlers/userRole.handler";

import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  HStack,
  Icon,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function UserRegistration() {
  const navigate = useNavigate();
  const toast = useToast();
  const confirmRefresh = useDisclosure();

  const defaultName = "";
  const defaultRole = "";
  const defaultEmail = "";
  const defaultPassword = "";
  const defaultConfirmPassword = "";

  const [name, setName] = useState(defaultName);
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [confirmPassword, setConfirmPassword] = useState(
    defaultConfirmPassword
  );

  const [errorPassword, setErrorPassword] = useState({
    hasError: false,
    messageError: "",
  });

  const [errorConfirmPassword, setErrorConfirmPassword] = useState({
    hasError: false,
    messageError: "",
  });

  const resetValues = () => {
    setName(defaultName);
    setRole(defaultRole);
    setEmail(defaultEmail);
    setPassword(defaultPassword);
    setConfirmPassword(defaultConfirmPassword);

    toast({
      title: "Dados redefinidos com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formIsValid = validateForm();
    if (!formIsValid) return;

    const response = await userRequests.create({
      email,
      name,
      password,
      role: role as UserRoleEnum,
    });

    if (response === "error") {
      toast({
        title: "Erro ao cadastrar usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    toast({
      title: "Usuário cadastrado com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    navigate(RoutesEnum.DASHBOARD);
  };

  const validateForm = () => {
    resetValidateErrors();

    if (password !== confirmPassword) {
      setErrorPassword({
        hasError: true,
        messageError: "As senhas não coincidem.",
      });

      setErrorConfirmPassword({
        hasError: true,
        messageError: "As senhas não coincidem.",
      });
      return false;
    }

    if (password.length < 8 || confirmPassword.length < 8) {
      setErrorPassword({
        hasError: true,
        messageError: "A senha precisa ter no mínimo 8 caracteres.",
      });

      setErrorConfirmPassword({
        hasError: true,
        messageError: "A senha precisa ter no mínimo 8 caracteres.",
      });

      return false;
    }

    return true;
  };

  const resetValidateErrors = () => {
    setErrorPassword({
      hasError: false,
      messageError: "",
    });

    setErrorConfirmPassword({
      hasError: false,
      messageError: "",
    });
  };

  return (
    <form onSubmit={(event) => register(event)}>
      <HStack spacing="0.5rem" mb="1.5rem">
        <Button variant="ghost" onClick={() => navigate(RoutesEnum.DASHBOARD)}>
          <Icon
            as={MdArrowBack}
            boxSize="1.5rem"
            color="teal.500"
            mr="0.5rem"
          />
        </Button>

        <Text variant="title" mb="0">
          Cadastrar usuário
        </Text>
      </HStack>

      <Card p="3rem" variant="outline" gap="2rem">
        <HStack spacing="2rem">
          <TextOrEmailInput
            isRequired
            label="Nome do usuário"
            defaultValue={defaultName}
            onChange={setName}
            value={name}
          />

          <SelectInput
            isRequired
            label="Privilégio do usuário"
            defaultValue={defaultRole}
            onChange={setRole}
            value={role}
            options={[
              {
                value: UserRoleEnum.ADMIN,
                label: userRoleHandler(UserRoleEnum.ADMIN),
              },
              {
                value: UserRoleEnum.VIEWER,
                label: userRoleHandler(UserRoleEnum.VIEWER),
              },
            ]}
          />
        </HStack>

        <TextOrEmailInput
          isRequired
          label="E-mail"
          inputType="email"
          defaultValue={defaultEmail}
          onChange={setEmail}
          value={email}
        />

        <HStack spacing="2rem">
          <TextOrEmailInput
            isRequired
            inputMode="alternateVisibility"
            label="Senha"
            defaultValue={defaultPassword}
            onChange={setPassword}
            value={password}
            invalidController={{
              isInvalid: errorPassword.hasError,
              invalidMessage: errorPassword.messageError,
            }}
          />

          <TextOrEmailInput
            isRequired
            inputMode="alternateVisibility"
            label="Confirmar senha"
            defaultValue={defaultConfirmPassword}
            onChange={setConfirmPassword}
            value={confirmPassword}
            invalidController={{
              isInvalid: errorConfirmPassword.hasError,
              invalidMessage: errorConfirmPassword.messageError,
            }}
          />
        </HStack>
      </Card>

      <HStack spacing="2rem" mt="1.5rem">
        <Button
          variant="outline"
          size="lg"
          w="100%"
          onClick={confirmRefresh.onOpen}
        >
          Redefinir dados inseridos
        </Button>

        <Button size="lg" w="100%" type="submit">
          Cadastrar usuário
        </Button>
      </HStack>

      <ConfirmModal
        title="ATENÇÃO"
        body="Tem certeza de que deseja redefinir os dados inseridos para cadastro? Todas as informações serão perdidas."
        onClose={confirmRefresh.onClose}
        isOpen={confirmRefresh.isOpen}
        customConfirmButton={{
          label: "Confirmar",
          color: "teal",
          onClick: () => resetValues(),
        }}
      />
    </form>
  );
}
