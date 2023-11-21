interface IPagination {
  last: boolean;
  first: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  numberOfElements: number;
  page: number;
}

export default IPagination;
