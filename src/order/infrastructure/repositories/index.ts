import type { BooksRepository } from "@/books/infrastructure/repositories/books/books.repository";

export interface BooksRepositories {
  books: BooksRepository;
}
