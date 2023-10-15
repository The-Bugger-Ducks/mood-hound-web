import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";
import MetaInterface from "../interfaces/meta.interface";
import ReqCommentsFilterInterface from "../interfaces/reqCommentsFilter.interface";

class CommentRequests {
  async getAll(meta: MetaInterface, filter: ReqCommentsFilterInterface) {
    const query = new URLSearchParams({
      order: "asc",
      limit: meta.limit.toString(),
      page: meta.page.toString(),
    });

    if (filter.comment) query.set("comment", filter.comment);
    if (filter.dateDone) query.set("dateDone", filter.dateDone.toISOString());
    if (filter.dateStart)
      query.set("dateStart", filter.dateStart.toISOString());
    if (filter.topic) query.set("topic", filter.topic);

    const response = await api.get<CommentPageInterface>(
      EndpointsEnum.COMMENT_GET_ALL + `?${query}`
    );

    return response.data;
  }
}

export default new CommentRequests();
