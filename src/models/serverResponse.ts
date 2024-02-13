export interface ServerResponseType<T> {
  data: T;
  links: {
    first: string;
    last: string;
    next: string;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
  };
}
