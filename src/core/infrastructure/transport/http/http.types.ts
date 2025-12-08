import type { AxiosHeaderValue } from "axios";

export type HttpHeaderValue = AxiosHeaderValue;

// Provide a specific list of request headers
// that you want to expose in HTTP requests.
export type HttpAllowedRequestHeaders =
  | "Accept"
  | "Content-Type"
  | "Authorization";

export type HttpRequestHeaders = {
  [key in HttpAllowedRequestHeaders]: HttpHeaderValue | undefined;
};

// You can specify specific response headers if needed.
export type HttpAllowedResponseHeaders = string;

export type HttpResponseHeaders = {
  [key in HttpAllowedResponseHeaders]: HttpHeaderValue | undefined;
};

export type HttpRequestConfig = {
  baseUrl?: string;
  params?: Record<string, unknown>;
  withCredentials?: boolean;
  headers?: HttpRequestHeaders;
};

export type HttpResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: HttpResponseHeaders;
};

export type HttpFailure<R> = {
  code?: string;
  response?: HttpResponse<R>;
};
