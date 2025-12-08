import { CONFIG } from "@/core/infrastructure/config";
import type { Repositories } from "@/core/infrastructure/repositories";
import { CommonRepository } from "@/core/infrastructure/repositories/common/common.repository";
import { createHttp } from "@/core/infrastructure/transport/http/http.transport";

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

export const api: Repositories = {
  common: new CommonRepository(http),
};
