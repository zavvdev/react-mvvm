import type { AxiosInstance } from "axios";
import { type Observable } from "rxjs";
import type {
  HttpFailure,
  HttpHeaders,
  HttpRequestConfig,
  HttpResponse,
} from "./types";
export declare class Http {
  private readonly repo;
  constructor(repo: AxiosInstance);
  private reqConfigAdapter;
  private resAdapter;
  get$<T = unknown>(url: string, config?: HttpRequestConfig): Observable<T>;
  post$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T>;
  put$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T>;
  patch$<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Observable<T>;
  delete$<T = unknown>(url: string, config?: HttpRequestConfig): Observable<T>;
}
export declare var createHttp: <R>(config: {
  baseUrl: string;
  headers?: HttpHeaders;
  withCredentials?: boolean;
  onResponseSuccess?: (response: HttpResponse<R>) => Promise<HttpResponse<R>>;
  onResponseError?: (error: HttpFailure<R>) => Promise<HttpFailure<R>>;
  onRequest?: (config: HttpRequestConfig) => Promise<HttpRequestConfig>;
}) => Http;
