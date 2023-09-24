import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";
import reqCommentsFilter from "../interfaces/reqCommentsFilter.interface";

class CommentRequests {
  async getAll(meta: MetaInterface, filter: reqCommentsFilter) {
    let query = `?order=asc&take=${meta.take}`;

    if (meta.cursor) query += `&cursor=${meta.cursor}`;
    if (meta.hasNextPage !== undefined) query += `&next=${meta.hasNextPage}`;
    if (meta.hasPreviousPage !== undefined)
      query += `&previous=${meta.hasPreviousPage}`;

    let headers = {};

    if (filter.comment) Object.assign(headers, { comment: filter.comment });
    if (filter.dateDone) Object.assign(headers, { dateDone: filter.dateDone });
    if (filter.dateStart)
      Object.assign(headers, { dateStart: filter.dateStart });
    if (filter.topic) Object.assign(headers, { topic: filter.topic });

    const response = await api.get<CommentPageInterface>(
      EndpointsEnum.COMMENT_GET_ALL + query,
      { headers }
    );

    return response.data;
  }
}

export default new CommentRequests();
