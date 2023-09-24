import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";
import reqCommentsHeader from "../interfaces/reqCommentsHeader.interface";

class CommentRequests {
  async getAll(meta: MetaInterface, headers: reqCommentsHeader) {
    let query = "?order=asc";

    query += `&take=${meta.take}`;
    if (meta.cursor) query += `&cursor=${meta.cursor}`;
    if (meta.hasNextPage) query += `&next=${meta.hasNextPage}`;
    if (meta.hasPreviousPage) query += `&previous=${meta.hasPreviousPage}`;

    const response = await api.get<CommentPageInterface>(
      EndpointsEnum.COMMENT_GET_ALL + query,
      {
        headers: {
          comment: headers.comment ?? null,
          dateDone: headers.dateDone ? headers.dateDone.toString() : null,
          dateStart: headers.dateStart ? headers.dateStart.toString() : null,
          topic: headers.topic ?? null,
        },
      }
    );

    return response.data;
  }
}

export default new CommentRequests();
