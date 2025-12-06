import { Auth, createApi, createHttp } from "@react-mvvm/infrastructure";
import {
  createAuthRequestInterceptor,
  createAuthResponseErrorInterceptor,
  createAuthTokenStorage,
} from "./auth";
import { createConfig } from "./config";
import { type CoreDependencies, envSchema } from "./types";

export var registerCoreDependencies = (env: unknown): CoreDependencies => {
  var config = createConfig(envSchema.parse(env));
  var tokenStorage = createAuthTokenStorage(config);

  var http = createHttp({
    baseUrl: config.apiUrl,
    onRequest: createAuthRequestInterceptor(tokenStorage),
    onResponseError: createAuthResponseErrorInterceptor(),
  });

  var api = createApi(http);

  return {
    config,
    api,
    auth: new Auth({ api, tokenStorage }),
  };
};
