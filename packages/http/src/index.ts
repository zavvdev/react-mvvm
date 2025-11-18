import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import type { Failure, Headers, Request, Response } from "./types";

export { Failure, Headers, Request, Response } from "./types";

export class Http {
  private readonly repo: AxiosInstance;

  constructor(repo: AxiosInstance) {
    this.repo = repo;
  }

  private reqConfigAdapter(cfg?: Request): AxiosRequestConfig {
    return {
      baseURL: cfg?.baseUrl,
      headers: cfg?.headers,
      params: cfg?.params,
      withCredentials: cfg?.withCredentials,
    };
  }

  private resAdapter<T>(res: AxiosResponse<T>): T {
    return res.data;
  }

  public get<T = unknown>(url: string, config?: Request): Promise<T> {
    return this.repo
      .get<T>(url, this.reqConfigAdapter(config))
      .then(this.resAdapter);
  }

  public post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: Request,
  ): Promise<T> {
    return this.repo
      .post<T>(url, data, this.reqConfigAdapter(config))
      .then(this.resAdapter);
  }

  public put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: Request,
  ): Promise<T> {
    return this.repo
      .put<T>(url, data, this.reqConfigAdapter(config))
      .then(this.resAdapter);
  }

  public patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: Request,
  ): Promise<T> {
    return this.repo
      .patch<T>(url, data, this.reqConfigAdapter(config))
      .then(this.resAdapter);
  }

  public delete<T = unknown>(url: string, config?: Request): Promise<T> {
    return this.repo
      .delete<T>(url, this.reqConfigAdapter(config))
      .then(this.resAdapter);
  }
}

export var createHttp = <R>(config: {
  baseUrl: string;
  headers?: Headers;
  withCredentials?: boolean;
  onResponseSuccess?: (response: Response<R>) => Promise<Response<R>>;
  onResponseError?: (error: Failure<R>) => Promise<Failure<R>>;
  onRequest?: (config: Request) => Promise<Request>;
}) => {
  var client = axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
    withCredentials: config.withCredentials,
  });

  client.interceptors.response.use(
    (res) => {
      if (config.onResponseSuccess) {
        return config
          .onResponseSuccess({
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers as Headers,
          })
          .then((modified) => {
            return {
              ...res,
              ...modified,
            } as AxiosResponse<R>;
          });
      }
      return res;
    },
    (error: AxiosError<R>) => {
      if (config.onResponseError) {
        return config
          .onResponseError({
            code: error.code,
            response: error.response
              ? {
                  data: error.response.data,
                  status: error.response.status,
                  statusText: error.response.statusText,
                  headers: error.response.headers as Headers,
                }
              : undefined,
          })
          .then((modified) => {
            return Promise.reject({
              ...error,
              ...modified,
            } as AxiosError<R>);
          });
      }
      return Promise.reject(error);
    },
  );

  client.interceptors.request.use((req) => {
    if (config.onRequest) {
      return config
        .onRequest({
          baseUrl: req.baseURL,
          params: req.params,
          withCredentials: req.withCredentials,
          headers: req.headers as Headers,
        })
        .then((modified) => {
          return {
            ...req,
            ...modified,
          } as InternalAxiosRequestConfig;
        });
    }
    return req;
  });

  return new Http(client);
};
