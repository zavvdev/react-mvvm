import {
  AUTHOR_POPULARITY_RANGE,
  type AuthorModel,
} from "@/_domain/models/author.model";
import { BOOK_STARS_RANGE, type BookModel } from "@/_domain/models/book.model";

export function calculateAuthorPopularity(
  author: AuthorModel,
  books: Array<BookModel>,
): number {
  if (books.length === 0) {
    return author.popularity;
  }

  const totalStars = books.reduce((sum, book) => sum + book.stars, 0);
  const averageStars = totalStars / books.length;

  const popularity =
    (averageStars / BOOK_STARS_RANGE.max) * AUTHOR_POPULARITY_RANGE.max;

  return Number(
    Math.min(
      Math.max(popularity, AUTHOR_POPULARITY_RANGE.min),
      AUTHOR_POPULARITY_RANGE.max,
    ).toFixed(1),
  );
}
