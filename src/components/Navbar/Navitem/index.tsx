import NavitemProps from "./props";

import { FC } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

const Navitem: FC<NavitemProps> = ({ subitems, title }) => {
  return (
    <Flex flexDir="column" gap="1.5rem">
      {title && <Text variant="navbar_title">{title}</Text>}

      {subitems.map((subitem) => (
        <Flex
          key={subitem.id}
          display={subitem.isVisible ? "flex" : "none"}
          gap="0.5rem"
          alignItems="center"
          cursor="pointer"
          textColor="gray.500"
          onClick={() => subitem.onClick()}
          _hover={{ textColor: "teal.500" }}
        >
          <Icon boxSize="1.5rem" as={subitem.icon} />
          <Text variant="navbar_text">{subitem.title}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Navitem;
