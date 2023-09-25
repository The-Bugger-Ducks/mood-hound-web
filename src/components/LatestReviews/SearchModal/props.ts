import { CommentTopicEnum } from "../../../utils/enums/commentTopic.enum";

export default interface SearchModal {
  isOpen: boolean;
  onClose: () => void;
  confirmButton: (
    topic?: CommentTopicEnum,
    dateStart?: Date,
    dateEnd?: Date
  ) => void;
}
