export default interface ReviewAnalysisInterface {
  rankingOfTopics: RankingOfTopicsInterface;
  timeSeriesDataTopic: TimeSeriesDataTopicInterface;
}

export interface RankingOfTopicsInterface
  extends Array<{
    value: number;
    label: string;
  }> {}

export interface TimeSeriesDataTopicInterface
  extends Array<{ month: string; sentiment: string; total: number }> {}
