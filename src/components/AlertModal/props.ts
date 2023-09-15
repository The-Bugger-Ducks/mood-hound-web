export default interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string;
}
