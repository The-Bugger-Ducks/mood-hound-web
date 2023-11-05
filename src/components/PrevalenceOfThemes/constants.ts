import CommentSentimentEnum from "../../utils/enums/commentSentiment.enum";
import { CommentTopicEnum } from "../../utils/enums/commentTopic.enum";

export const xaxisCategories = [
  CommentTopicEnum.QUALITY,
  CommentTopicEnum.RECEIPT,
  CommentTopicEnum.GENERAL_SATISFACTION,
  CommentTopicEnum.DELIVERY,
  CommentTopicEnum.RECOMMENDATION,
  CommentTopicEnum.EXPECTATION,
  CommentTopicEnum.OTHERS,
  CommentTopicEnum.COST_BENEFIT,
]

export const defaultConfiguration: any = {
  series: [
    {
      name: "TOTAL",
      data: [],
    },
  ],

  options: {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    xaxis: {
      categories: xaxisCategories
    },
    markers: {
      size: 3,
      hover: {
        size: 10
      }
    }
  },
};
