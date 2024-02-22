import { AxiosError, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';

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

type BaseRequest<T, V> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<V> = {
  code: 'success';
  data: V;
};

type ErrorResponse<E = AxiosError> = {
  code: 'error';
  error: E;
};

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;

export const requestHandler = <T, V, E = AxiosError>(request: BaseRequest<T, V>) => async (
  params?: T,
): Promise<SuccessResponse<V> | ErrorResponse<E>> => {
  try {
    const response = await request(params);
    return { code: 'success', data: response.data };
  } catch (e) {
    return { code: 'error', error: e as E };
  }
};
