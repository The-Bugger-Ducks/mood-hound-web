export default interface ReviewAnalysisInterface {
  rankingOfTopics: RankingOfTopicsInterface;
  timeSeriesDataTopic: TimeSeriesDataTopicInterface;
  commentsPerState: CommentsPerStateInterface;
  custumerGender: CustumerGenderInterface;
  custumerAgeRange: CustumerAgeRangeInterface;
}

export interface RankingOfTopicsInterface {
  resume: {
    total: number;
    positive: number;
    negative: number;
    neutral: number;
  };

  topics: {
    topic: string;
    positive: number;
    negative: number;
    neutral: number;
    total: number;
  }[];
}

export interface TimeSeriesDataTopicInterface
  extends Array<{ month: string; sentiment: string; total: number }> {}

export interface CommentsPerStateInterface extends Array<any[]> {}

export interface CustumerGenderInterface {
  values: number[];
  labels: string[];
}

export interface CustumerAgeRangeInterface {
  values: number[];
  labels: string[];
}
