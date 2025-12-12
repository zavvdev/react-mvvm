import { BooksRepository } from "@/infrastructure/repositories/books/books.repository";
import { OrderRepository } from "@/infrastructure/repositories/order/order.repository";
import { http } from "@/infrastructure/transport/http/http.transport";

export const repositories = {
  books: new BooksRepository(http),
  order: new OrderRepository(http),
};

export type Repositories = typeof repositories;
