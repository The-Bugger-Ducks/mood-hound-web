import BasicCardProps from "./props";

import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

const BasicCard: FC<BasicCardProps> = ({ label, value }) => {
  return (
    <Center
      w="100%"
      h="23rem"
      flexDir="column"
      gap="1rem"
      p="0.5rem"
      bg={"#FFF"}
      borderRadius="1rem"
      border={"1px solid #E2E8F0"}
    >
      <Text textAlign="center" color="gray.500">
        {label}
      </Text>
      <Text textAlign="center" as="b" fontSize="xl" color="gray.500">
        {value}
      </Text>
    </Center>
  );
};

export default BasicCard;
