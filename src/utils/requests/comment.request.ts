import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";

class CommentRequests {
  async getAll(meta: MetaInterface) {
    let query = "?order=asc";

    query += `&take=${meta.take}`;
    if (meta.cursor) query += `&cursor=${meta.cursor}`;
    if (meta.hasNextPage) query += `&next=${meta.hasNextPage}`;
    if (meta.hasPreviousPage) query += `&previous=${meta.hasPreviousPage}`;

    const response = await api.get<CommentPageInterface>(
      EndpointsEnum.COMMENT_GET_ALL + query
    );

    return response.data;
  }
}

export default new CommentRequests();
