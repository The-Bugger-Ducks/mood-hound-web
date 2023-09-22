import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";

class CommentRequests {
  async getAll(limit: number, page: number, sortBy: number) {
    try {
      const response = await api.get<CommentRequests[]>(
        EndpointsEnum.COMMENT_GET_ALL
      );

      return response.data;
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }
}

export default new CommentRequests();
