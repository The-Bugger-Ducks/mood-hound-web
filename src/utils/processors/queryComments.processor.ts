import CommentPageInterface from "../interfaces/comment.interface";
import commentRequests from "../requests/comment.request";

import { ApiServiceErr } from "../types/query.types";
import { QueryOptions, useQuery } from "react-query";

const queryCommentsProcessor = (
  {
    payload,
  }: {
    payload: MetaInterface;
  },
  opt?: QueryOptions<CommentPageInterface | "error">
) =>
  useQuery<CommentPageInterface | "error", ApiServiceErr>(
    [payload],
    async () => {
      const response = await commentRequests.getAll(payload);
      return response;
    },
    opt
  );

export default queryCommentsProcessor;
