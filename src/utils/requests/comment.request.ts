import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";

class CommentRequests {
  async getAll(meta: MetaInterface) {
    try {
      let query = "?order=asc";

      query += `&take=${meta.take}`;
      query += `&cursor=${meta.cursor}`;
      query += `&next=${meta.hasNextPage}`;
      query += `&previous=${meta.hasPreviousPage}`;

      const response = await api.get<CommentPageInterface>(
        EndpointsEnum.COMMENT_GET_ALL + query
      );

      return response.data;
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }
}

export default new CommentRequests();
