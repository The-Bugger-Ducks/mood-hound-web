import logo from "../../assets/images/logo.svg";

import TextInput from "../TextInput";
import MenuWithIcon from "../MenuWithIcon";
import RoutesEnum from "../../utils/enums/routes.enum";

import { FC, useContext, useState } from "react";
import { MdLogout } from "react-icons/md";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { useAuth } from "../../hooks/useAuth";

const Header: FC = () => {
  const { signout } = useAuth();

  const navigate = useNavigate();

  const [valueToSearch, setValueToSearch] = useState("");
  const searchOptions = useContext<SearchContextProps | null>(SearchContext);

  const options = [
    { label: "Meu perfil", onClick: () => openMyProfile() },
    { label: "Sair", onClick: () => signout(), iconConfig: { icon: MdLogout } },
  ];

  const openMyProfile = () => {
    navigate(RoutesEnum.USER_UPDATE);
  };

  const search = () => {
    if (!searchOptions) return;
    searchOptions.updateValueToSearch(valueToSearch);
  };

  return (
    <HStack position="sticky" zIndex={999} w="100%" top="0" spacing="1.5rem">
      <Image src={logo} />

      <TextInput
        iconLeftAddon={BsSearch}
        placeholder="Pesquise por um comentário..."
        onChange={setValueToSearch}
        onEnter={search}
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
