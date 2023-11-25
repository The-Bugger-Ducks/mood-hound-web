import logo from "../../assets/images/logo.svg";
import RoutesEnum from "../../utils/enums/routes.enum";
import NavitemProps from "./Navitem/props";
import Navitem from "./Navitem";
import UserRoleEnum from "../../utils/enums/userRole.enum";
import userRequests from "../../utils/requests/user.requests";

import { FC, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Card, Image, useToast } from "@chakra-ui/react";
import { AiOutlineControl } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdCalendarViewMonth, MdLogout, MdSearch } from "react-icons/md";

const Navbar: FC = () => {
  const { signout } = useAuth();

  const toast = useToast();
  const navigate = useNavigate();

  const [role, setRole] = useState<UserRoleEnum>();

  const [options, setOptions] = useState<NavitemProps[]>([
    {
      id: "01",
      title: "Menu",
      subitems: [
        {
          id: "0101",
          title: "Visão geral",
          isVisible: false,
          icon: MdCalendarViewMonth,
          onClick: () => navigate(RoutesEnum.OVERVIEW),
        },
        {
          id: "0102",
          title: "Motor de busca",
          isVisible: false,
          icon: MdSearch,
          onClick: () => navigate(RoutesEnum.SEARCH_ENGINE),
        },
      ],
    },

    {
      id: "02",
      title: "Configurações",
      subitems: [
        {
          id: "0201",
          title: "Sistema",
          isVisible: false,
          icon: AiOutlineControl,
          onClick: () => navigate(RoutesEnum.SYSTEM),
        },
        {
          id: "0202",
          title: "Meu perfil",
          isVisible: false,
          icon: BiUser,
          onClick: () => navigate(RoutesEnum.USER_UPDATE),
        },
      ],
    },

    {
      id: "03",
      subitems: [
        {
          id: "0301",
          title: "Sair",
          isVisible: true,
          icon: MdLogout,
          onClick: () => signout(),
        },
      ],
    },
  ]);

  useEffect(() => {
    getUserRole();
  }, []);

  useEffect(() => {
    const newOptions = [
      {
        id: "01",
        title: "Menu",
        subitems: [
          {
            id: "0101",
            title: "Visão geral",
            isVisible: getVisibilityRule([UserRoleEnum.ADMIN]),
            icon: MdCalendarViewMonth,
            onClick: () => navigate(RoutesEnum.OVERVIEW),
          },
          {
            id: "0102",
            title: "Motor de busca",
            isVisible: getVisibilityRule([
              UserRoleEnum.VIEWER,
              UserRoleEnum.ADMIN,
            ]),
            icon: MdSearch,
            onClick: () => navigate(RoutesEnum.SEARCH_ENGINE),
          },
        ],
      },

      {
        id: "02",
        title: "Configurações",
        subitems: [
          {
            id: "0201",
            title: "Sistema",
            isVisible: getVisibilityRule([UserRoleEnum.ADMIN]),
            icon: AiOutlineControl,
            onClick: () => navigate(RoutesEnum.SYSTEM),
          },
          {
            id: "0202",
            title: "Meu perfil",
            isVisible: true,
            icon: BiUser,
            onClick: () => navigate(RoutesEnum.USER_UPDATE),
          },
        ],
      },

      {
        id: "03",
        subitems: [
          {
            id: "0301",
            title: "Sair",
            isVisible: true,
            icon: MdLogout,
            onClick: () => signout(),
          },
        ],
      },
    ];

    console.log(newOptions);

    setOptions(newOptions);
  }, [role]);

  const getUserRole = async () => {
    const response = await userRequests.getMe();

    if (response === "error") {
      toast({
        title: "Não foi possível verificar cargo do usuário.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setRole(response.role);
  };

  const getVisibilityRule = (permitedRoles: UserRoleEnum[]) => {
    let isPermited = false;

    permitedRoles.forEach((permitedRole) => {
      if (permitedRole === role) {
        isPermited = true;
      }
    });

    return isPermited;
  };

  return (
    <Card
      position="fixed"
      display={["none", "none", "none", "flex", "flex", "flex"]}
      zIndex={999}
      w={["0", "0", "0", "25vw", "20vw", "15vw"]}
      h="100vh"
      top="0"
      left="0"
      flexDir="column"
      p="3rem"
      bg="whiteAlpha.900"
      borderRadius="0"
      gap="2.5rem"
      flex="1"
    >
      <Image src={logo} />

      {options.map((option) => (
        <Navitem
          key={option.id}
          id={option.id}
          subitems={option.subitems}
          title={option.title}
        />
      ))}
    </Card>
  );
};

export default Navbar;
