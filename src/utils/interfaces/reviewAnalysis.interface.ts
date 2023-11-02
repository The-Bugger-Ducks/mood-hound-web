export default interface ReviewAnalysisInterface {
  rankingOfTopics: RankingOfTopicsInterface;
  timeSeriesDataTopic: TimeSeriesDataTopicInterface;
  commentsPerState: CommentsPerStateInterface;
  custumerGender: CustumerGenderInterface;
  custumerAgeRange: CustumerAgeRangeInterface;
}

export interface RankingOfTopicsInterface
  extends Array<{
    value: number;
    label: string;
  }> {}

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
