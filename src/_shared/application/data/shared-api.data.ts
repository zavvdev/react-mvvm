import { CONFIG } from "@/_shared/infrastructure/config";
import type { SharedRepositories } from "@/_shared/infrastructure/repositories";
import { CommonRepository } from "@/_shared/infrastructure/repositories/common/common.repository";
import { createHttp } from "@/_shared/infrastructure/transport/http/http.transport";

export const http = createHttp({
  baseUrl: CONFIG.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  onRequest: async (config) => {
    // You can add headers or log requests here
    return config;
  },
  onResponseSuccess: async (response) => {
    // You can log successful responses here
    return response;
  },
  onResponseError: async (error) => {
    // You can handle errors globally here
    return error;
  },
});

export const sharedApi: SharedRepositories = {
  common: new CommonRepository(http),
};
