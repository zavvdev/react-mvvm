import { createApi, createHttp } from "@react-mvvm/infrastructure";
import { createConfig } from "@/application/config";
import { type CoreDependencies, envSchema } from "@/application/types";

export const useApplicationViewModel = (env: unknown): CoreDependencies => {
  const config = createConfig(envSchema.parse(env));

  const http = createHttp({
    baseUrl: config.apiUrl,
  });

  const api = createApi(http);

  return {
    config,
    api,
  };
};

export type ApplicationViewModel = typeof useApplicationViewModel;
