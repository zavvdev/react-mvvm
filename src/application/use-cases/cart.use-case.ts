import type { SignalService } from "@/application/services/signal/signal.service";
import type { CartSignal } from "@/application/services/signal/signals/cart.signals";
import type { BookModel } from "@/domain/models/book.model";

interface UseCaseDependencies {
  signalService: SignalService;
  cartSignal: CartSignal;
}

const createUseCart =
  ({ signalService, cartSignal }: UseCaseDependencies) =>
  () => {
    const [cart, setCart] = signalService.useSignal(cartSignal);

    return {
      cart,
      addToCart: (book: BookModel) => {
        setCart((prevCart) => {
          if (prevCart.find((b) => b.id === book.id)) {
            return prevCart;
          }
          return [...prevCart, book];
        });
      },
      removeFromCart: (bookId: number) => {
        setCart((prevCart) => prevCart.filter((b) => b.id !== bookId));
      },
      isInCart: (bookId: number) => {
        return cart.some((b) => b.id === bookId);
      },
      clearCart: () => {
        setCart([]);
      },
      total: cart.length,
    };
  };

export const createCartUseCase = (args: UseCaseDependencies) => ({
  useCart: createUseCart(args),
});

export type CartUseCase = ReturnType<typeof createCartUseCase>;
