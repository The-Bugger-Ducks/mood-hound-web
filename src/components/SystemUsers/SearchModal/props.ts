import UserRoleEnum from "../../../utils/enums/userRole.enum";

export default interface SearchModal {
  isOpen: boolean;
  onClose: () => void;
  confirmButton: (name?: string, email?: string, role?: UserRoleEnum) => void;
}
