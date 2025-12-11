import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import type {
  HttpFailure,
  HttpRequestConfig,
  HttpRequestHeaders,
  HttpResponse,
} from "@/infrastructure/transport/http/http.transport.types";
import {
  buildHttpRequestConfig,
  buildHttpResponse,
  mapHttpRequestHeaders,
} from "@/infrastructure/transport/http/http.transport.utilities";

export class Http {
  private readonly repo: AxiosInstance;

  constructor(repo: AxiosInstance) {
    this.repo = repo;
  }

  private reqConfigAdapter(cfg?: HttpRequestConfig): AxiosRequestConfig {
    return {
      baseURL: cfg?.baseUrl,
      params: cfg?.params,
      withCredentials: cfg?.withCredentials,
      headers: cfg?.headers ? mapHttpRequestHeaders(cfg.headers) : undefined,
    };
  }

  private resAdapter<T>(res: AxiosResponse<T>): T {
    return res.data;
  }

  public async get<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.get<T>(url, this.reqConfigAdapter(config));
    return this.resAdapter(res);
  }

  public async post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.post<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return this.resAdapter(res);
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.put<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return this.resAdapter(res);
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.patch<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return this.resAdapter(res);
  }

  public async delete<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.delete<T>(url, this.reqConfigAdapter(config));
    return this.resAdapter(res);
  }
}

export function createHttp<R>(config: {
  baseUrl: string;
  headers?: HttpRequestHeaders;
  withCredentials?: boolean;
  onResponseSuccess?: (response: HttpResponse<R>) => Promise<HttpResponse<R>>;
  onResponseError?: (error: HttpFailure<R>) => Promise<HttpFailure<R>>;
  onRequest?: (config: HttpRequestConfig) => Promise<HttpRequestConfig>;
}) {
  const client = axios.create({
    baseURL: config.baseUrl,
    withCredentials: config.withCredentials,
    headers: config.headers ? mapHttpRequestHeaders(config.headers) : undefined,
  });

  client.interceptors.response.use(
    async (res) => {
      if (config.onResponseSuccess) {
        return (await config.onResponseSuccess(
          buildHttpResponse<R>(res),
        )) as AxiosResponse<R>;
      }
      return res;
    },

    async (error: AxiosError<R>) => {
      if (config.onResponseError) {
        const modified = await config.onResponseError({
          code: error.code,
          response: error.response
            ? buildHttpResponse<R>(error.response)
            : undefined,
        });
        return Promise.reject(modified);
      }
      return Promise.reject(error);
    },
  );

  client.interceptors.request.use(async (req) => {
    if (config.onRequest) {
      return (await config.onRequest(
        buildHttpRequestConfig(req),
      )) as InternalAxiosRequestConfig;
    }
    return req;
  });

  return new Http(client);
}
