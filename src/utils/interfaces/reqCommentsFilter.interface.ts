import { CommentTopicEnum } from "../enums/commentTopic.enum";

export default interface ReqCommentsFilterInterface {
  comment?: string;
  topic?: CommentTopicEnum;
  dateStart?: Date;
  dateDone?: Date;
}
