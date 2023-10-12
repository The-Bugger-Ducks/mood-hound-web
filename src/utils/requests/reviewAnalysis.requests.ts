import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import ReqReviewAnalysisInterface from "../interfaces/reqReviewAnalysis.interface";

class ReviewAnalysis {
  async getAnalysis() {
    try {
      const response = await api.get<ReqReviewAnalysisInterface>(
        EndpointsEnum.REVIEW_ANALYSIS
      );

      return response.data;
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }
}

export default new ReviewAnalysis();
