import { CommentTopicEnum } from "../../../utils/enums/commentTopic.enum";

export const topicOptions = [
  { value: CommentTopicEnum.DELIVERY, label: "Entrega" },
  { value: CommentTopicEnum.EXPECTATION, label: "Expectativa" },
  {
    value: CommentTopicEnum.SATISFIED,
    label: "Satisfação geral",
  },
  { value: CommentTopicEnum.QUALITY, label: "Qualidade" },
  { value: CommentTopicEnum.RECEIVEMENT, label: "Recebimento" },
  {
    value: CommentTopicEnum.RECOMMENDATION,
    label: "Recomendação",
  },
  {
    value: CommentTopicEnum.COST_BENEFIT,
    label: "Custo-benefício",
  },
  {
    value: CommentTopicEnum.OTHERS,
    label: "Outros",
  },
];
