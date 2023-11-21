import BasicCardProps from "./props";

import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

const BasicCard: FC<BasicCardProps> = ({ label, value }) => {
  return (
    <Center
      p="0"
      bg="transparent"
      w="100%"
      h="100%"
      flexDir="column"
      gap="1rem"
    >
      <Text color="gray.500">{label}</Text>
      <Text as="b" fontSize="xl" color="gray.500">
        {value}
      </Text>
    </Center>
  );
};

export default BasicCard;
