import { z as t } from "zod";
import { Author } from "@/domain/models/author.model";
import { makeModel } from "@/domain/utilities";

const BOOK_STARS_RANGE = {
  min: 0,
  max: 5,
};

const schema = t.object({
  id: t.number(),
  title: t.string(),
  author: Author.schema,
  date: t.string(),
  price: t.string(),
  cover: t.string(),
  stars: t.number().min(BOOK_STARS_RANGE.min).max(BOOK_STARS_RANGE.max),
});

export const Book = makeModel(schema);
export type BookModel = t.infer<typeof Book.schema>;
