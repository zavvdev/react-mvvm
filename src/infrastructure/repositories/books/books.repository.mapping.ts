// If for whatever reason the API response structure differs from
// the expected DTO structure, we can map it here.

import type { GetBooksDto } from "@/infrastructure/repositories/books/books.repository.types";

// P.S It's ok to have any type here because we control the API response.
export function getBooksResponseMapping(data: any): GetBooksDto["Response"] {
  return {
    ...data,
    data: data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      author: item.author,
      date: item.publish_date,
      price: item.price,
      cover: item.cover_url,
      stars: item.stars,
    })),
  };
}
