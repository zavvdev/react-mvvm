import { CONFIG } from "@/infrastructure/config";
import { BooksRepository } from "@/infrastructure/repositories/books/books.repository";
import { OrderRepository } from "@/infrastructure/repositories/order/order.repository";
import { createHttp } from "@/infrastructure/transport/http/http.transport";

const http = createHttp({
  baseURL: CONFIG.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const repositories = {
  books: new BooksRepository(http),
  order: new OrderRepository(http),
};

export type Repositories = typeof repositories;
