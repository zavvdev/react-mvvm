import type { Http } from "@/books/_gateway/input";
import {
  getBooksDto,
  type GetBooksDto,
} from "@/books/infrastructure/repositories/books/books.repository.types";

export class BooksRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async getBooks() {
    const response = await this.http.get<GetBooksDto["Response"]>("/books");
    return await getBooksDto.response.parseAsync(response);
  }
}
