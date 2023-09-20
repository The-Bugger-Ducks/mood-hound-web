export default interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string;

  customConfirmButton: {
    label?: string;
    color?: string;
    onClick: () => void;
  };

  customCancelButton?: {
    label?: string;
    onClick: () => void;
  };
}
