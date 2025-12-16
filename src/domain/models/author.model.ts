import { z as t } from "zod";
import { makeModel } from "@/domain/utilities";

const POPULARITY_THRESHOLD = 9;

const AUTHOR_POPULARITY_RANGE = {
  min: 0,
  max: 10,
};

const schema = t
  .object({
    id: t.number(),
    name: t.string(),
    popularity: t
      .number()
      .min(AUTHOR_POPULARITY_RANGE.min)
      .max(AUTHOR_POPULARITY_RANGE.max),
  })
  // Exclusive model business logic can be attached here
  .transform((author) => ({
    ...author,
    isPopular: () => {
      return author.popularity >= POPULARITY_THRESHOLD;
    },
  }));

export const Author = makeModel(schema);
