import UserRoleEnum from "../../../utils/enums/userRole.enum";

export default interface UpdateRoleModal {
  isOpen: boolean;
  onClose: () => void;
  confirmButton: (role: UserRoleEnum) => void;
}
