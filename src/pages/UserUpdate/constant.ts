import UserRoleEnum from "../../utils/enums/userRole.enum";
import userRoleHandler from "../../utils/handlers/userRole.handler";

export const userRoleOptions = [
  {
    id: UserRoleEnum.ADMIN,
    value: UserRoleEnum.ADMIN,
    label: userRoleHandler(UserRoleEnum.ADMIN),
  },
  {
    id: UserRoleEnum.VIEWER,
    value: UserRoleEnum.VIEWER,
    label: userRoleHandler(UserRoleEnum.VIEWER),
  },
];
