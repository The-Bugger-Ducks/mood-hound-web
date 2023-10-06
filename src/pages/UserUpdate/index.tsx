import TextOrEmailInput from "../../components/TextOrEmailInput";
import SelectInput from "../../components/SelectInput";
import ConfirmModal from "../../components/ConfirmModal";
import userRequests from "../../utils/requests/user.requests";
import RoutesEnum from "../../utils/enums/routes.enum";

import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import { userRoleOptions } from "./constant";

import {
  Button,
  Card,
  HStack,
  Icon,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function UserUpdate() {
  const navigate = useNavigate();
  const toast = useToast();
  const confirmRefresh = useDisclosure();

  const defaultPassword = "";
  const defaultConfirmPassword = "";

  const [userId, setUserId] = useState("");

  const [defaultName, setDefaultName] = useState("");
  const [defaultRole, setDefaultRole] = useState("");
  const [defaultEmail, setDefaultEmail] = useState("");

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const getDefaultValues = async () => {
    const response = await userRequests.getMe();

    if (response === "error") {
      toast({
        title: "Não foi possível obter dados do usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setDefaultName(response.name);
    setDefaultRole(response.role);
    setDefaultEmail(response.email);
    setUserId(response.id);

    setName(response.name);
    setRole(response.role);
    setEmail(response.email);
  };

  useEffect(() => {
    getDefaultValues();
  }, []);

  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValidated = validateForm();
    if (!isFormValidated) return;

    const response = await userRequests.update({
      id: userId,
      email: email != "" ? email : undefined,
      name: name != "" ? name : undefined,
      password: password != "" ? password : undefined,
    });

    if (response === "error") {
      toast({
        title: "Não foi atualizar usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    toast({
      title: "Usuário atualizado com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    navigate(RoutesEnum.DASHBOARD);
  };

  const validateForm = () => {
    resetValidateErrors();

    if ((password || confirmPassword) && password !== confirmPassword) {
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

    if (
      (password || confirmPassword) &&
      (password.length < 8 || confirmPassword.length < 8)
    ) {
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
    <form onSubmit={(event) => updateUser(event)}>
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
          Atualizar minhas informações
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
            isDisabled
            label="Privilégio do usuário"
            defaultValue={defaultRole}
            onChange={setRole}
            value={role}
            options={userRoleOptions}
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
          size="lg"
          variant="outline"
          w="100%"
          onClick={confirmRefresh.onOpen}
        >
          Redefinir para dados cadastrados
        </Button>

        <Button size="lg" w="100%" type="submit">
          Atualizar informações
        </Button>
      </HStack>

      <ConfirmModal
        title="ATENÇÃO"
        body="Tem certeza de que deseja redefinir os dados inseridos? Todas as informações não cadastradas serão perdidas."
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
