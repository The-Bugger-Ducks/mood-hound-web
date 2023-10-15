import logo from "../../assets/images/logo.svg";

import MenuWithIcon from "../MenuWithIcon";
import RoutesEnum from "../../utils/enums/routes.enum";

import { FC } from "react";
import { MdLogout, MdOutlineSettings } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Flex, Image, Spacer, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CommentTopicEnum } from "../../utils/enums/commentTopic.enum";
import ConfigureDashboardModal from "./ConfigureDashboardModal";

const Header: FC = () => {
  const { signout } = useAuth();

  const navigate = useNavigate();
  const configureDashboardModalController = useDisclosure();

  const options = [
    { id: "myProfile", label: "Meu perfil", onClick: () => openMyProfile() },
    {
      id: "configureDashboard",
      label: "Configurar dashboard",
      onClick: () => configureDashboardModalController.onOpen(),
      iconConfig: { icon: MdOutlineSettings },
    },
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

  const configureDashboard = (
    topic?: CommentTopicEnum,
    dateStart?: Date,
    dateEnd?: Date,
    state?: string
  ) => {
    console.log(topic, dateStart, dateEnd, state);
  };

  return (
    <Flex
      position="sticky"
      zIndex={999}
      w="100%"
      top="0"
      p="2.5rem 0"
      bg="gray.50"
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

      <ConfigureDashboardModal
        isOpen={configureDashboardModalController.isOpen}
        onClose={configureDashboardModalController.onClose}
        confirmButton={configureDashboard}
      />
    </Flex>
  );
};

export default Header;
