export default interface MetaInterface {
  limit: number;
  page: number;
  totalPages?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}
