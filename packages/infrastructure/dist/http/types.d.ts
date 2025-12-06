export type HttpHeaders = Record<
  string,
  string | string[] | number | boolean | null
>;
export type HttpRequestConfig = {
  baseUrl?: string;
  params?: Record<string, unknown>;
  withCredentials?: boolean;
  headers?: HttpHeaders;
};
export type HttpResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: HttpHeaders;
};
export type HttpFailure<R> = {
  code?: string;
  response?: HttpResponse<R>;
};
