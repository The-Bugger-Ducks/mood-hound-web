import MenuWithIconProps from "./props";

import { FC } from "react";

import {
  MenuButton,
  MenuItem,
  MenuList,
  Menu as ChakraMenu,
  IconButton,
  Icon,
} from "@chakra-ui/react";

const MenuWithIcon: FC<MenuWithIconProps> = ({
  mainIcon,
  hasBorder,
  options,
}) => {
  return (
    <ChakraMenu>
      <MenuButton
        as={mainIcon ? IconButton : undefined}
        aria-label="Options"
        variant="outline"
        border={hasBorder ? undefined : "none"}
        icon={
          <Icon
            as={mainIcon.icon}
            boxSize={mainIcon.boxSize ?? ""}
            color={mainIcon.color ?? ""}
          />
        }
      />
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option.id} onClick={option.onClick}>
            {option.iconConfig && (
              <Icon
                as={option.iconConfig.icon}
                boxSize={option.iconConfig.boxSize ?? ""}
                color={option.iconConfig.color ?? ""}
                mr="0.5rem"
              />
            )}

            <span>{option.label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};

export default MenuWithIcon;
