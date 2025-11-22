import { type Api, createApi } from "@react-mvvm/api";
import { Auth } from "@react-mvvm/auth";
import { asFunction, asValue, injectable } from "@react-mvvm/di";
import { createHttp } from "@react-mvvm/http";
import {
  createAuthRequestInterceptor,
  createAuthResponseErrorInterceptor,
  createAuthTokenStorage,
} from "@/Core/Auth";
import { createConfig } from "@/Core/Config";
import { envSchema } from "@/Core/Types";

export var registerCore = (env: unknown) => {
  var config = createConfig(envSchema.parse(env));
  var tokenStorage = createAuthTokenStorage(config);

  var http = createHttp({
    baseUrl: config.apiUrl,
    onRequest: createAuthRequestInterceptor(tokenStorage),
    onResponseError: createAuthResponseErrorInterceptor(config),
  });

  var api = createApi(http);

  injectable({
    config: asValue(config),
    api: asValue(api),
    auth: asFunction(
      ({ api }: { api: Api }) => new Auth({ api, tokenStorage }),
    ).singleton(),
  });
};
