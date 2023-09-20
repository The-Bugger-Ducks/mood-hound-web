import logo from "../../assets/images/logo.svg";

import TextInput from "../TextInput";
import MenuWithIcon from "../MenuWithIcon";
import RoutesEnum from "../../utils/enums/routes.enum";

import { FC } from "react";
import { MdLogout } from "react-icons/md";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  const options = [
    { label: "Meu perfil", onClick: () => openMyProfile() },
    { label: "Sair", onClick: () => logout(), iconConfig: { icon: MdLogout } },
  ];

  const openMyProfile = () => {
    navigate(RoutesEnum.USER_UPDATE);
  };

  const logout = () => {
    console.log("Cliquei logout");
  };

  return (
    <HStack position="sticky" zIndex={999} w="100%" top="0" spacing="1.5rem">
      <Image src={logo} />

      <TextInput
        iconLeftAddon={BsSearch}
        placeholder="Pesquise por um comentário..."
      />

      <MenuWithIcon
        mainIcon={{
          icon: BsThreeDotsVertical,
          boxSize: "1.5rem",
          color: "gray.600",
        }}
        options={options}
      />
    </HStack>
  );
};

export default Header;
