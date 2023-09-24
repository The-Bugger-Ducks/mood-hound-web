import { CommentTopicEnum } from "../enums/commentTopic.enum";

export default interface reqCommentsHeader {
  comment?: string;
  topic?: CommentTopicEnum;
  dateStart?: Date;
  dateDone?: Date;
}
