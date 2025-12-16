import { getBooksResponseMapping } from "@/infrastructure/repositories/books/books.repository.mapping";
import {
  type GetBooksDto,
  getBooksDto,
} from "@/infrastructure/repositories/books/books.repository.types";
import { errorTrackerService } from "@/infrastructure/services/error-tracker/error-tracker.service";
import type { Http } from "@/infrastructure/transport/http/http.transport.factory";

export class BooksRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async getBooks() {
    try {
      const response = await this.http.get<GetBooksDto["Response"]>("/books");
      const mapped = getBooksResponseMapping(response);
      return await getBooksDto.response.parseAsync(mapped);
    } catch (error) {
      errorTrackerService.report({
        location: "BooksRepository/getBooks",
        message: "Failed to fetch books",
        error,
      });
      throw error;
    }
  }
}
