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

const buildHttpResponse = <R>(res: AxiosResponse): HttpResponse<R> => ({
  data: res.data,
  status: res.status,
  statusText: res.statusText,
  headers: res.headers as HttpHeaders,
});

export const createHttp = <R>(config: {
  baseUrl: string;
  headers?: HttpHeaders;
  withCredentials?: boolean;
  onResponseSuccess?: (response: HttpResponse<R>) => Promise<HttpResponse<R>>;
  onResponseError?: (error: HttpFailure<R>) => Promise<HttpFailure<R>>;
  onRequest?: (config: HttpRequestConfig) => Promise<HttpRequestConfig>;
}) => {
  const client = axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
    withCredentials: config.withCredentials,
  });

  client.interceptors.response.use(
    async (res) => {
      if (config.onResponseSuccess) {
        const modified = await config.onResponseSuccess(
          buildHttpResponse<R>(res),
        );
        return {
          ...res,
          ...modified,
        } as AxiosResponse<R>;
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

        return Promise.reject({
          ...error,
          ...modified,
        });
      }

      return Promise.reject(error);
    },
  );

  client.interceptors.request.use(async (req) => {
    if (config.onRequest) {
      const modified = await config.onRequest({
        baseUrl: req.baseURL,
        params: req.params,
        withCredentials: req.withCredentials,
        headers: req.headers as HttpHeaders,
      });
      return {
        ...req,
        ...modified,
      } as InternalAxiosRequestConfig;
    }

    return req;
  });

  return new Http(client);
};
