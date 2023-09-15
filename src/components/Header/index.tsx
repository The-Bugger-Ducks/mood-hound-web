import logo from "../../assets/images/logo.svg";

import TextInput from "../TextInput";

import { FC } from "react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { HStack, Icon, Image } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <HStack position="sticky" zIndex={9999} w="100%" top="0" spacing="1.5rem">
      <Image src={logo} />

      <TextInput
        iconLeftAddon={BsSearch}
        placeholder="Pesquise por um comentário..."
      />

      <Icon as={BsThreeDotsVertical} boxSize="1.5rem" />
    </HStack>
  );
};

export default Header;
