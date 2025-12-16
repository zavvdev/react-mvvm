import { DI } from "@/application/di/di";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";

interface Arguments {
  cartUseCase: CartUseCase;
}

const useCartViewModel = ({ cartUseCase }: Arguments) => {
  const { total, cart, removeFromCart } = cartUseCase.useCart();

  return {
    isEmpty: total === 0,
    books: cart,
    removeBook: (id: number) => removeFromCart(id),
  };
};

export const cartViewModel = () =>
  DI.inject<"cartUseCase">("cartUseCase")(useCartViewModel);

export type CartViewModel = ReturnType<typeof cartViewModel>;
