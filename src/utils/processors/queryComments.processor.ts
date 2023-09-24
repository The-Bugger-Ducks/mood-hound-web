import CommentPageInterface from "../interfaces/commentPage.interface";
import reqCommentsFilter from "../interfaces/reqCommentsFilter.interface";
import commentRequests from "../requests/comment.request";

import { ApiServiceErr } from "../types/query.types";
import { QueryOptions, useQuery } from "react-query";

const queryCommentsProcessor = (
  payload: MetaInterface,
  headers: reqCommentsFilter,
  opt?: QueryOptions<CommentPageInterface>
) =>
  useQuery<CommentPageInterface, ApiServiceErr>(
    [payload, headers],
    async () => {
      const response = await commentRequests.getAll(payload, headers);
      return response;
    },
    opt
  );

export default queryCommentsProcessor;
