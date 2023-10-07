import { CommentTopicEnum } from "../../../utils/enums/commentTopic.enum";

export const topicOptions = [
  {
    id: CommentTopicEnum.DELIVERY,
    value: CommentTopicEnum.DELIVERY,
    label: "Entrega",
  },
  {
    id: CommentTopicEnum.EXPECTATION,
    value: CommentTopicEnum.EXPECTATION,
    label: "Expectativa",
  },
  {
    id: CommentTopicEnum.GENERAL_SATISFACTION,
    value: CommentTopicEnum.GENERAL_SATISFACTION,
    label: "Satisfação geral",
  },
  {
    id: CommentTopicEnum.QUALITY,
    value: CommentTopicEnum.QUALITY,
    label: "Qualidade",
  },
  {
    id: CommentTopicEnum.RECEIPT,
    value: CommentTopicEnum.RECEIPT,
    label: "Recebimento",
  },
  {
    id: CommentTopicEnum.RECOMMENDATION,
    value: CommentTopicEnum.RECOMMENDATION,
    label: "Recomendação",
  },
  {
    id: CommentTopicEnum.COST_BENEFIT,
    value: CommentTopicEnum.COST_BENEFIT,
    label: "Custo-benefício",
  },
  {
    id: CommentTopicEnum.OTHERS,
    value: CommentTopicEnum.OTHERS,
    label: "Outros",
  },
];
