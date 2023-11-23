import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import PerformanceMetricsInterface from "../interfaces/performanceMetrics.interface";

class PerformanceMetrics {
  async get(filter: {
    dateEnd?: Date;
    dateStart?: Date;
  }): Promise<PerformanceMetricsInterface | "error"> {
    try {
      const query = new URLSearchParams();

      if (filter.dateStart) query.set("dateStart", filter.dateStart.toString());
      if (filter.dateEnd) query.set("dateEnd", filter.dateEnd.toString());

      const response = await api.get<PerformanceMetricsInterface>(
        EndpointsEnum.PERFOMANCE_METRICS + `?${query}`
      );

      return response.data;
    } catch (error) {
      console.log("ERROR on get performance metrics: ", error);
      return "error";
    }
  }
}

export default new PerformanceMetrics();
