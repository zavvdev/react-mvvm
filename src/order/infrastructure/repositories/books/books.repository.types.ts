import { Book, createResponseSchema } from "@/books/_gateway/input";
import { z as t } from "zod";

// Get all DTO

export const getBooksDto = {
  response: createResponseSchema(t.array(Book.schema)),
};

export type GetBooksDto = {
  Response: t.infer<typeof getBooksDto.response>;
};
