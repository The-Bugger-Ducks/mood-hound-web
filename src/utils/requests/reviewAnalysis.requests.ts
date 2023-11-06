import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import ReviewAnalysisInterface from "../interfaces/reviewAnalysis.interface";
import { ReqReviewAnalysisInterface } from "../interfaces/reviewAnalysis.interface";

class ReviewAnalysis {
  async getAnalysis(filter: {
    topic?: string;
    dateEnd?: Date;
    dateStart?: Date;
    state?: string;
  }): Promise<ReviewAnalysisInterface | "error"> {
    try {
      const query = new URLSearchParams();

      if (filter.dateStart) query.set("dateStart", filter.dateStart.toString());
      if (filter.dateEnd) query.set("dateEnd", filter.dateEnd.toString());
      if (filter.state) query.set("state", filter.state);
      if (filter.topic) query.set("topic", filter.topic);

      const response = await api.get<ReqReviewAnalysisInterface>(
        EndpointsEnum.REVIEW_ANALYSIS + `?${query}`
      );

      const data: ReviewAnalysisInterface = {
        rankingOfTopics: response.data.rankingOfTopics,
        timeSeriesDataTopic: response.data.timeSeriesDataTopic,
        commentsPerState: response.data.commentsPerState,
        custumerGender: response.data.commentsPerGender,
        custumerAgeRange: response.data.commentsPerAgeGroup
      }

      return data;
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }
}

export default new ReviewAnalysis();
