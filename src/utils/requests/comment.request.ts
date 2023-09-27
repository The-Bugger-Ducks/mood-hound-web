import { topicOptions } from "../../components/LatestReviews/SearchModal/constants";
import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import CommentPageInterface from "../interfaces/commentPage.interface";
import reqCommentsFilter from "../interfaces/reqCommentsFilter.interface";

class CommentRequests {
  async getAll(meta: MetaInterface, filter: reqCommentsFilter) {
    
    const query = new URLSearchParams({
      order: "asc",
      take: meta.take.toString()
    })  

    if (meta.cursor) query.set("cursor", meta.cursor);
    if (meta.hasNextPage !== undefined) query.set("next", `${meta.hasNextPage}`);
    if (meta.hasPreviousPage !== undefined) query.set("previous", `${meta.hasPreviousPage}`)

    if (filter.comment) query.set("comment", filter.comment)
    if (filter.dateDone) query.set("dateDone", filter.dateDone.toISOString());
    if (filter.dateStart) query.set("dateStart", filter.dateStart.toISOString());
    if (filter.topic) query.set("topic", filter.topic)


    const response = await api.get<CommentPageInterface>(
      EndpointsEnum.COMMENT_GET_ALL + `?${query}`
    );

    if (response) {
      response.data?.data?.map((comment) => {
        comment.createdAt

        const topic = topicOptions.find(topic => topic.value === comment.topic)

        if (topic) {
          comment.topic = topic.label
        }
        return comment
      })
    }

    return response.data;
  }
}

export default new CommentRequests();
