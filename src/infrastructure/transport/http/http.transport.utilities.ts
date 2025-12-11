import type {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import type {
  HttpResponseHeaders,
  HttpRequestHeaders,
  HttpRequestConfig,
  HttpResponse,
} from "@/infrastructure/transport/http/http.transport.types";

export function mapHttpRequestHeaders(
  headers: HttpRequestHeaders | AxiosRequestHeaders,
) {
  return {
    Accept: headers.Accept,
    "Content-Type": headers["Content-Type"],
    Authorization: headers.Authorization,
  } satisfies HttpRequestHeaders;
}

export function buildHttpResponse<R>(res: AxiosResponse): HttpResponse<R> {
  return {
    data: res.data,
    status: res.status,
    statusText: res.statusText,
    headers: res.headers as HttpResponseHeaders,
  };
}

export function buildHttpRequestConfig(
  req: InternalAxiosRequestConfig,
): HttpRequestConfig {
  return {
    baseUrl: req.baseURL,
    params: req.params,
    withCredentials: req.withCredentials,
    headers: mapHttpRequestHeaders(req.headers),
  };
}
