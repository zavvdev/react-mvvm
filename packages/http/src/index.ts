import type { AxiosInstance, AxiosRequestConfig } from "axios";

type HttpRequestConfig = {
  baseURL?: string;
  params?: Record<string, unknown>;
  withCredentials?: boolean;
  headers?: {
    [key: string]: string | string[] | number | boolean | null;
  };
};

export class Http {
  private readonly repo: AxiosInstance;

  constructor(repo: AxiosInstance) {
    this.repo = repo;
  }

  private reqConfigAdapter(
    requestConfig?: HttpRequestConfig,
  ): AxiosRequestConfig {
    return {
      baseURL: requestConfig?.baseURL,
      headers: requestConfig?.headers,
      params: requestConfig?.params,
      withCredentials: requestConfig?.withCredentials,
    };
  }

  public async get<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const response = await this.repo.get<T>(url, this.reqConfigAdapter(config));
    return response.data;
  }

  public async post<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const response = await this.repo.post<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return response.data;
  }

  public async put<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const response = await this.repo.put<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return response.data;
  }

  public async patch<T = unknown, R = unknown>(
    url: string,
    data?: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const response = await this.repo.patch<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return response.data;
  }

  public async delete<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const response = await this.repo.delete<T>(
      url,
      this.reqConfigAdapter(config),
    );
    return response.data;
  }
}
