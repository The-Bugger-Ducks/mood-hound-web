import { useState } from "react";

import { AspectRatio, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Image, Show, Text, useToast } from "@chakra-ui/react";

import TextInput from "../../components/TextInput";
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.svg";
import authRequests from "../../utils/requests/auth.requests";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const toast = useToast();

  const { signin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorPassword, setErrorPassword] = useState({
    hasError: false,
    messageError: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formIsValid()) return;

    const response = await authRequests.signIn(email, password);

    let messageError = "";
    if (response === "Invalid credentials.") {
      messageError = "Credencias inválidos"
    }

    if (response === "error") {
      messageError = "Erro ao autenticar usuário."
    }
    
    if (messageError != "") {
      toast({
        title: messageError,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      signin(response.accessToken)
    }
    
  }

  const formIsValid = () => {
    setErrorPassword({
      hasError: false,
      messageError: "",
    });

    if (password.length < 8 ) {
      setErrorPassword({
        hasError: true,
        messageError: "A senha precisa ter no mínimo 8 caracteres.",
      });

      return false;
    }

    return true;
  };

  return (
    <Flex minH="100vh">
      <Show above="lg">
        <Box flex={1} >
          <AspectRatio w={"100%"} h={"100%"} ratio={1}>
            <Image src={login} />
          </AspectRatio>
        </Box>
      </Show>

      <Box flex={1} alignSelf="center" display={"flex"} justifyContent={"center"}>
        <form onSubmit={handleSubmit}>
          <Card p={["20px","50px","70px"]} gap="24px" backgroundColor="transparent" variant="unstyled" maxW={["300px", "400px", "500px"]}>           
            <CardHeader>
              <Center>
                <Image src={logo} align="center"/>
              </Center>
              <Text fontSize="sm" fontWeight="medium" textAlign="right">by The Bugger Ducks</Text>
            </CardHeader>

            <CardBody display={"flex"} flexDirection={"column"} gap={"24px"}> 
              <TextInput
                isRequired
                label="E-mail"
                inputType="email"
                onChange={setEmail}
                value={email}
              />
              <TextInput
                isRequired
                inputMode="alternateVisibility"
                label="Senha"
                onChange={setPassword}
                value={password}
                invalidController={{
                  isInvalid: errorPassword.hasError,
                  invalidMessage: errorPassword.messageError,
                }}
              />

              <Button type="submit">
                Entrar
              </Button>
            </CardBody>
            <CardFooter flexDirection="column" alignItems="center" textAlign="center" gap="24px">
              <Text fontSize="sm" fontWeight="medium">Ainda não está cadastrado?</Text>
              <Text maxW={390} fontSize="sm" fontWeight="medium" color="gray.400">
                Entre em contato com o administrador responsável pelo cadastro de usuários
              </Text>
            </CardFooter>
            
          </Card>
        </form>
      </Box>
    </Flex>

  );
}
