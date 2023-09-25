import { CommentTopicEnum } from "../enums/commentTopic.enum";

export default interface reqCommentsFilter {
  comment?: string;
  topic?: CommentTopicEnum;
  dateStart?: Date;
  dateDone?: Date;
}
