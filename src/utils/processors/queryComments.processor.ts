import CommentInterface from "../interfaces/comment.interface";
import commentRequests from "../requests/comment.request";

import { ApiServiceErr } from "../types/query.types";
import { QueryOptions, useQuery } from "react-query";

const queryCommentsProcessor = (
  { limit, page, sortBy }: { limit: number; page: number; sortBy: number },
  opt?: QueryOptions<CommentInterface[] | "error">
) =>
  useQuery<CommentInterface[] | "error", ApiServiceErr>(
    [limit, page, sortBy],
    async () => {
      const response = await commentRequests.getAll(limit, page, sortBy);
      return response;
    },
    opt
  );

export default queryCommentsProcessor;
