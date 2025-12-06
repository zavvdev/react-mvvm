import { createApi, createHttp } from "@react-mvvm/infrastructure";
import { createConfig } from "./config";
import { type CoreDependencies, envSchema } from "./types";

export var registerCoreDependencies = (env: unknown): CoreDependencies => {
  var config = createConfig(envSchema.parse(env));

  var http = createHttp({
    baseUrl: config.apiUrl,
  });

  var api = createApi(http);

  return {
    config,
    api,
  };
};
