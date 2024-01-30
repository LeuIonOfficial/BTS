import { AxiosRequestHeaders, Method } from 'axios';

type RequestBody =
  | {
      [key: string]: unknown;
    }
  | string
  | File;

type RequestOptions = {
  credentials?: string;
  headers?: AxiosRequestHeaders;
  method?: Method;
  data?: RequestBody;
  params?: { [key: string]: unknown };
  signal?: AbortSignal;
};

export type RequestParameters = { apiUrl: string; opts?: RequestOptions };

export type RequestHandlerParams = {
  apiUrl: string;
  params?: { [key: string]: unknown };
  body?: RequestBody | string;
  otherOpts?: { [key: string]: unknown };
};
