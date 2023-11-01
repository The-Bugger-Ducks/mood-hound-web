import logo from "../../assets/images/logo.svg";

import MenuWithIcon from "../MenuWithIcon";
import RoutesEnum from "../../utils/enums/routes.enum";

import { FC } from "react";
import { MdCalendarViewMonth, MdLogout, MdSearch } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { AiOutlineControl } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const { signout } = useAuth();

  const navigate = useNavigate();

  const options = [
    {
      id: "overview",
      label: "Visão geral",
      onClick: () => navigate(RoutesEnum.OVERVIEW),
      iconConfig: { icon: MdCalendarViewMonth },
    },
    {
      id: "searchEngine",
      label: "Motor de busca",
      onClick: () => navigate(RoutesEnum.SEARCH_ENGINE),
      iconConfig: { icon: MdSearch },
    },
    {
      id: "system",
      label: "Sistema",
      onClick: () => navigate(RoutesEnum.SYSTEM),
      iconConfig: { icon: AiOutlineControl },
    },
    {
      id: "myProfile",
      label: "Meu perfil",
      onClick: () => navigate(RoutesEnum.USER_UPDATE),
      iconConfig: { icon: BiUser },
    },
    {
      id: "logout",
      label: "Sair",
      onClick: () => signout(),
      iconConfig: { icon: MdLogout },
    },
  ];

  return (
    <Flex
      position="sticky"
      zIndex={999}
      w="100%"
      top="0"
      p="3rem 3rem 1.5rem 3rem"
      bg="gray.50"
      display={["flex", "flex", "flex", "none", "none", "none"]}
    >
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
