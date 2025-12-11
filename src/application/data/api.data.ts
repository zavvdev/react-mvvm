import { CONFIG } from "@/infrastructure/config";
import type { Repositories } from "@/infrastructure/repositories";
import { createHttp } from "@/infrastructure/transport/http/http.transport";
import { BooksRepository } from "@/infrastructure/repositories/books/books.repository";
import { OrderRepository } from "@/infrastructure/repositories/order/order.repository";

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
  books: new BooksRepository(http),
  order: new OrderRepository(http),
};
