import type { AxiosRequestConfig } from "axios";

export type HttpInstanceConfig = Pick<
  AxiosRequestConfig,
  "withCredentials" | "baseURL" | "headers"
>;
