import CommentSentimentEnum from "../enums/commentSentiment.enum";

export default function commentSentimentHandler(
  commentSentiment: CommentSentimentEnum
) {
  if (commentSentiment === CommentSentimentEnum.NEGATIVE) return "red";
  if (commentSentiment === CommentSentimentEnum.NEUTRAL) return "yellow";
  if (commentSentiment === CommentSentimentEnum.POSITIVE) return "green";

  return "gray";
}
