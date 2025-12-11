import {
  getBooksDto,
  type GetBooksDto,
} from "@/infrastructure/repositories/books/books.repository.types";
import type { Http } from "@/infrastructure/transport/http/http.transport";
import { getBooksResponseMapping } from "@/infrastructure/repositories/books/books.repository.mapping";

export class BooksRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async getBooks() {
    const response = await this.http.get<GetBooksDto["Response"]>("/books");
    const mapped = getBooksResponseMapping(response);
    return await getBooksDto.response.parseAsync(mapped);
  }
}
