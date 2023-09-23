import { CommentTopicEnum } from "../../../utils/enums/commentTopic.enum";

export const topicOptions = [
  { value: CommentTopicEnum.DELIVERY, label: "Entrega" },
  { value: CommentTopicEnum.EXPECTATION, label: "Expectativa" },
  {
    value: CommentTopicEnum.GENERAL_SATISFACTION,
    label: "Satisfação geral",
  },
  { value: CommentTopicEnum.QUALITY, label: "Qualidade" },
  { value: CommentTopicEnum.RECEIPT, label: "Recebimento" },
  {
    value: CommentTopicEnum.RECOMMENDATION,
    label: "Recomendação",
  },
];
