export default interface ReviewAnalysisInterface {
  rankingOfTopics: RankingOfTopicsInterface;
  timeSeriesDataTopic: TimeSeriesDataTopicInterface;
}

export interface RankingOfTopicsInterface
  extends Array<{
    value: string;
    label: string;
  }> {}

export interface TimeSeriesDataTopicInterface
  extends Array<{ month: Date; sentiment: string; total: number }> {}
