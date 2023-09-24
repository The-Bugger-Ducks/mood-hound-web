import CommentSentimentEnum from "../enums/commentSentiment.enum";

export default interface CommentInterface {
  id: string;
  productId: string;
  productName: string;
  text: string;
  topic: string;
  sentiment: CommentSentimentEnum;
  rating: number;
  createdAt: Date;
  addedAt: Date;
}
