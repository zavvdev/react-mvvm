import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import { defer, from, map, type Observable } from "rxjs";
import type {
  HttpFailure,
  HttpHeaders,
  HttpRequestConfig,
  HttpResponse,
} from "./types";

export class Http {
  private readonly repo: AxiosInstance;

  constructor(repo: AxiosInstance) {
    this.repo = repo;
  }

  private reqConfigAdapter(cfg?: HttpRequestConfig): AxiosRequestConfig {
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

  public get$<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Observable<T> {
    return defer(() =>
      from(this.repo.get<T>(url, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }

  public post$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T> {
    return defer(() =>
      from(this.repo.post<T>(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }

  public put$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T> {
    return defer(() =>
      from(this.repo.put<T>(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }

  public patch$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T> {
    return defer(() =>
      from(this.repo.patch<T>(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }

  public delete$<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Observable<T> {
    return defer(() =>
      from(this.repo.delete<T>(url, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
}

export var createHttp = <R>(config: {
  baseUrl: string;
  headers?: HttpHeaders;
  withCredentials?: boolean;
  onResponseSuccess?: (response: HttpResponse<R>) => Promise<HttpResponse<R>>;
  onResponseError?: (error: HttpFailure<R>) => Promise<HttpFailure<R>>;
  onRequest?: (config: HttpRequestConfig) => Promise<HttpRequestConfig>;
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
            headers: res.headers as HttpHeaders,
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
                  headers: error.response.headers as HttpHeaders,
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
          headers: req.headers as HttpHeaders,
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
