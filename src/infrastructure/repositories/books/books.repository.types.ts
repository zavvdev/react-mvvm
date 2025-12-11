import { z as t } from "zod";
import { Book } from "@/domain/models/book.model";
import { createResponseSchema } from "@/infrastructure/repositories/types";

// Get all DTO

export const getBooksDto = {
  response: createResponseSchema(t.array(Book.schema)),
};

export type GetBooksDto = {
  Response: t.infer<typeof getBooksDto.response>;
};
