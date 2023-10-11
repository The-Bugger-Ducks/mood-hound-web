import logo from "../../assets/images/logo.svg";

import MenuWithIcon from "../MenuWithIcon";
import RoutesEnum from "../../utils/enums/routes.enum";

import { FC } from "react";
import { MdLogout } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header: FC = () => {
  const { signout } = useAuth();

  const navigate = useNavigate();

  const options = [
    { id: "myProfile", label: "Meu perfil", onClick: () => openMyProfile() },
    {
      id: "logout",
      label: "Sair",
      onClick: () => signout(),
      iconConfig: { icon: MdLogout },
    },
  ];

  const openMyProfile = () => {
    navigate(RoutesEnum.USER_UPDATE);
  };

  return (
    <Flex position="sticky" zIndex={999} w="100%" top="0">
      <Image src={logo} />

      <Spacer />

      <MenuWithIcon
        mainIcon={{
          icon: BsThreeDotsVertical,
          boxSize: "1.5rem",
          color: "gray.600",
        }}
        options={options}
      />
    </Flex>
  );
};

export default Header;
