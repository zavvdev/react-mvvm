import { CONFIG } from "@/infrastructure/config";
import { createHttp } from "@/infrastructure/transport/http/http.transport.factory";

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

export type Http = typeof http;
