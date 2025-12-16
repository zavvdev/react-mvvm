import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { Http } from "@/infrastructure/transport/http/http.transport.factory";
import type { HttpInstanceConfig } from "@/infrastructure/transport/http/http.transport.types";

function requestInterceptor(config: InternalAxiosRequestConfig) {
  return config;
}

function responseSuccessInterceptor<T, K>(response: AxiosResponse<T, K>) {
  return response;
}

async function responseErrorInterceptor(error: AxiosError) {
  return error;
}

export const createHttp = (config: HttpInstanceConfig) => {
  const client = axios.create(config);

  client.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor,
  );

  client.interceptors.request.use(requestInterceptor);

  return new Http(client);
};
