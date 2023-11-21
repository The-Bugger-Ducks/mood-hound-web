export default interface PerformanceMetricsInterface {
  totalDocumentsProcessed: number;
  errorRate: ErrorRateInterface;
}

export interface ErrorRateInterface {
  total: number;
  errors: number;
}
