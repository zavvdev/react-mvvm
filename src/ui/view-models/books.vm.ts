import { DI } from "@/application/di/di";
import type { BooksUseCase } from "@/application/use-cases/books";
import { useMemo } from "react";

interface Arguments {
  booksUseCase: BooksUseCase;
}

const useBooksViewModel = ({ booksUseCase }: Arguments) => {
  const { data, isError, isLoading } = booksUseCase.useBooks();

  const books = useMemo(
    () =>
      data.map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author.name,
        date: book.date,
        coverUrl: book.cover,
      })),
    [data],
  );

  return {
    books,
    isError,
    isLoading,
  };
};

export const booksViewModel = () =>
  DI.inject<"booksUseCase">("booksUseCase")(useBooksViewModel);

export type BooksViewModel = ReturnType<typeof booksViewModel>;
