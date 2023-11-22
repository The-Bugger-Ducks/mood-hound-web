export default interface PerformanceMetricsInterface {
  totalDocumentsProcessed: number;
  errorRate: ErrorRateInterface;
  dailyTotalProcessingTime: DailyTotalProcessingTimeInterface;
}

export interface ErrorRateInterface {
  total: number;
  errors: number;
}

export interface DailyTotalProcessingTimeInterface
  extends Array<{ day: string; time: number }> {}
