export type Headers = Record<
  string,
  string | string[] | number | boolean | null
>;

export type Request = {
  baseUrl?: string;
  params?: Record<string, unknown>;
  withCredentials?: boolean;
  headers?: Headers;
};

export type Response<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
};

export type Failure<R> = {
  code?: string;
  response?: Response<R>;
};
