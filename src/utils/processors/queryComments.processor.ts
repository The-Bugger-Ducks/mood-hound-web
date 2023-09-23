import CommentPageInterface from "../interfaces/commentPage.interface";
import commentRequests from "../requests/comment.request";

import { ApiServiceErr } from "../types/query.types";
import { QueryOptions, useQuery } from "react-query";

const queryCommentsProcessor = (
  payload: MetaInterface,
  opt?: QueryOptions<CommentPageInterface>
) =>
  useQuery<CommentPageInterface, ApiServiceErr>(
    [payload],
    async () => {
      const response = await commentRequests.getAll(payload);
      return response;
    },
    opt
  );

export default queryCommentsProcessor;
