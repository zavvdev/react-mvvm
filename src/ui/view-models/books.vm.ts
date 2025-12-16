import { DI } from "@/application/di/di";
import type { BooksQuerySignal } from "@/application/services/query-signal/queries/books.queries";
import type { SignalService } from "@/application/services/signal/signal.service";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";

interface Arguments {
  signalService: SignalService;
  booksQuerySignal: BooksQuerySignal;
  cartUseCase: CartUseCase;
}

const useBooksViewModel = ({
  signalService,
  booksQuerySignal,
  cartUseCase,
}: Arguments) => {
  const [{ data, isError, isLoading }] =
    signalService.useSignal(booksQuerySignal);

  const cart = cartUseCase.useCart();

  return {
    // prepare data for view if needed
    books: data?.data || [],
    isError,
    isLoading,
    onAddToCart: cart.addToCart,
    onRemoveFromCart: cart.removeFromCart,
    isInCart: cart.isInCart,
  };
};

export const booksViewModel = () =>
  DI.inject<"signalService" | "booksQuerySignal" | "cartUseCase">(
    "signalService",
    "booksQuerySignal",
    "cartUseCase",
  )(useBooksViewModel);

export type BooksViewModel = ReturnType<typeof booksViewModel>;
