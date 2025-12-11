import type { BooksRepository } from "@/infrastructure/repositories/books/books.repository";
import type { OrderRepository } from "@/infrastructure/repositories/order/order.repository";

export interface Repositories {
  books: BooksRepository;
  order: OrderRepository;
}
