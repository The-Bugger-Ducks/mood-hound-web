import logo from "../../assets/images/logo.svg";
import RoutesEnum from "../../utils/enums/routes.enum";
import NavitemProps from "./Navitem/props";
import Navitem from "./Navitem";

import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Card, Image } from "@chakra-ui/react";
import { AiOutlineControl } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdCalendarViewMonth, MdLogout, MdSearch } from "react-icons/md";

const Navbar: FC = () => {
  const { signout } = useAuth();

  const navigate = useNavigate();

  const options: NavitemProps[] = [
    {
      id: "01",
      title: "Menu",
      subitems: [
        {
          id: "0101",
          title: "Visão geral",
          icon: MdCalendarViewMonth,
          onClick: () => console.log("uau"),
        },
        {
          id: "0102",
          title: "Motor de busca",
          icon: MdSearch,
          onClick: () => console.log("uau"),
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
          icon: AiOutlineControl,
          onClick: () => console.log("uau"),
        },
        {
          id: "0202",
          title: "Meu perfil",
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
          icon: MdLogout,
          onClick: () => signout(),
        },
      ],
    },
  ];

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

      {options.map((options) => (
        <Navitem
          key={options.id}
          id={options.id}
          subitems={options.subitems}
          title={options.title}
        />
      ))}
    </Card>
  );
};

export default Navbar;
