import { CommentTopicEnum } from "../../../utils/enums/commentTopic.enum";

export default interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
  confirmButton: (
    topic?: CommentTopicEnum,
    dateStart?: Date,
    dateEnd?: Date,
    state?: string
  ) => void;
}
