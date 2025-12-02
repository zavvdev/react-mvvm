import { type AnyResponse, AUTH_HEADER, MESSAGES } from "@react-mvvm/api";
import type { TokenStorage } from "@react-mvvm/auth";
import type { Failure, Request } from "@react-mvvm/http";
import type { Config } from "@/core/types";

export var createAuthTokenStorage = (config: Config): TokenStorage => ({
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
  (tokenStorage: TokenStorage) => (request: Request) => {
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
  (config: Config) => (failure: Failure<AnyResponse>) => {
    if (failure.response?.data?.message === MESSAGES.unauthorized) {
      window.location.href = config.publicRoutes.auth();
    }
    return Promise.reject(failure);
  };
