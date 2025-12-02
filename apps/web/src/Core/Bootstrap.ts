import { type Api, createApi } from "@react-mvvm/api";
import { Auth } from "@react-mvvm/auth";
import { createHttp } from "@react-mvvm/http";
import {
  createAuthRequestInterceptor,
  createAuthResponseErrorInterceptor,
  createAuthTokenStorage,
} from "@/core/auth";
import { createConfig } from "@/core/config";
import { type Config, envSchema } from "@/core/types";

export interface CoreDependencies {
  config: Config;
  api: Api;
  auth: Auth;
}

export var registerCore = (env: unknown): CoreDependencies => {
  var config = createConfig(envSchema.parse(env));
  var tokenStorage = createAuthTokenStorage(config);

  var http = createHttp({
    baseUrl: config.apiUrl,
    onRequest: createAuthRequestInterceptor(tokenStorage),
    onResponseError: createAuthResponseErrorInterceptor(config),
  });

  var api = createApi(http);

  return {
    config,
    api,
    auth: new Auth({ api, tokenStorage }),
  };
};
