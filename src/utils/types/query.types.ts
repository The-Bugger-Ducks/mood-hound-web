import { UseQueryOptions } from "react-query";

export type ApiServiceErr = any;

export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<
  Response,
  ApiServiceErr,
  TVariables,
  any[]
>;
