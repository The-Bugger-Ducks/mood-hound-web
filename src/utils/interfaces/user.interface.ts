import UserRoleEnum from "../enums/userRole.enum";

export default interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: UserRoleEnum;
}
