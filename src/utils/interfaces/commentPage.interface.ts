import CommentInterface from "./comment.interface";
import MetaInterface from "./meta.interface";

export default interface CommentPageInterface {
  data: CommentInterface[];
  meta: MetaInterface;
}
