import UserRoleEnum from "../enums/userRole.enum";

export default function userRoleHandler(userRole: UserRoleEnum) {
  if (userRole === UserRoleEnum.ADMIN) return "Gestor";

  if (userRole === UserRoleEnum.VIEWER) return "Operador";

  return `${userRole}`;
}
