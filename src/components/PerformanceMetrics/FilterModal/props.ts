export default interface SearchModal {
  isOpen: boolean;
  onClose: () => void;
  confirmButton: (dateStart?: Date, dateEnd?: Date) => void;
}
