export default interface PerformanceMetricsInterface {
  totalDocumentsProcessed: number;
  errorRate: ErrorRateInterface;
  dailyTotalProcessingTime: DailyTotalProcessingTimeInterface;
  dailyTotalErrors: DailyTotalErrorsInterface;
  errorsByType: ErrorsByTypeInterface;
}

export interface ErrorRateInterface {
  total: number;
  errors: number;
}

export interface DailyTotalProcessingTimeInterface
  extends Array<{ day: string; time: number }> {}

export interface DailyTotalErrorsInterface
  extends Array<{ day: string; errors: number }> {}

export interface ErrorsByTypeInterface
  extends Array<{ type: string; errors: number }> {}
