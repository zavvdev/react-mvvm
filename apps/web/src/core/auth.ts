import {
  API_MESSAGES,
  type ApiAnyResponse,
  AUTH_HEADER,
  type AuthTokenStorage,
  type HttpFailure,
  type HttpRequestConfig,
} from "@react-mvvm/infrastructure";
import type { Config } from "@/core/types";
import { PUBLIC_ROUTES } from "@/routes";

export var createAuthTokenStorage = (config: Config): AuthTokenStorage => ({
  get: () => {
    return localStorage.getItem(config.authTokenName) || undefined;
  },
  set: (token: string) => {
    localStorage.setItem(config.authTokenName, token);
  },
  clear: () => {
    localStorage.removeItem(config.authTokenName);
  },
});

export var createAuthRequestInterceptor =
  (tokenStorage: AuthTokenStorage) => (request: HttpRequestConfig) => {
    var token = tokenStorage.get();
    return Promise.resolve({
      ...request,
      headers: {
        ...request.headers,
        [AUTH_HEADER]: token || "",
      },
    });
  };

export var createAuthResponseErrorInterceptor =
  () => (failure: HttpFailure<ApiAnyResponse>) => {
    if (failure.response?.data?.message === API_MESSAGES.unauthorized) {
      window.location.href = PUBLIC_ROUTES.auth();
    }
    return Promise.reject(failure);
  };
