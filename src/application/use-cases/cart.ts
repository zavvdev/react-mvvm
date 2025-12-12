import type { BookModel } from "@/domain/models/book.model";
import {
  signalService,
  type SignalService,
} from "@/application/services/signal/signal.service";
import { DI } from "@/application/di/di";

export const cartSignal = signalService.createSignal<BookModel[]>([]);

interface Arguments {
  signalService: SignalService;
}

const useCart_ = ({ signalService }: Arguments) => {
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
    clearCart: () => {
      setCart([]);
    },
  };
};

const useCart = DI.inject<"signalService">("signalService")(useCart_);

export const cartUseCase = {
  useCart,
};

export type CartUseCase = typeof cartUseCase;
