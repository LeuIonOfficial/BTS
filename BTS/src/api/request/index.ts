import {
  RequestHandlerParams,
  RequestParameters,
} from "@models/requestType.ts";
import axios, { Method } from "axios";

const request = async ({ apiUrl, opts }: RequestParameters) => {
  const accessToken = localStorage.getItem("ccpx_access_token") ?? "";
  const authHeaders = { Authorization: `Bearer ${accessToken}` };

  const config = {
    ...opts,
    credentials: "same-origin",
    validateStatus: (status: number) => {
      return status !== 401;
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...authHeaders,
      ...opts?.headers,
    },
  };

  try {
    const { data, status, statusText, headers } = await axios(
      `${import.meta.env.VITE_SECRET_URL}${apiUrl}`,
      config,
    );
    return {
      data,
      status,
      statusText,
      headers,
    };
  } catch (e: any) {
    return e;
  }
};

export const get = async ({
  apiUrl,
  params,
  otherOpts,
}: RequestHandlerParams) => {
  const opts = {
    method: "GET" as Method,
    params,
    ...otherOpts,
  };

  return request({ apiUrl, opts });
};

export async function patch({ apiUrl, params, body }: RequestHandlerParams) {
  const opts = {
    method: "PATCH" as Method,
    data: body,
    params,
  };

  return request({ apiUrl, opts });
}

export async function put({
  apiUrl,
  params,
  body,
  otherOpts,
}: RequestHandlerParams) {
  const opts = {
    method: "PUT" as Method,
    data: body,
    params,
    ...otherOpts,
  };
  return request({ apiUrl, opts });
}

export async function post({
  apiUrl,
  params,
  body,
  otherOpts,
}: RequestHandlerParams) {
  const opts = {
    method: "POST" as Method,
    data: body,
    params,
    ...otherOpts,
  };
  return request({ apiUrl, opts });
}

export async function deleteApi({
  apiUrl,
  params,
  body,
  otherOpts,
}: RequestHandlerParams) {
  const opts = {
    method: "DELETE" as Method,
    data: body,
    params,
    ...otherOpts,
  };
  return request({ apiUrl, opts });
}

export default request;
