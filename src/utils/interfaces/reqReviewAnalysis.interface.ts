export default interface ReqReviewAnalysisInterface {
  rankingOfTopics: { value: string; label: string }[];
  timeSeriesDataTopic: { month: Date; sentiment: string; total: number }[];
}
