import { DI } from "@/application/di/di";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";

interface Injections {
  cartUseCase: CartUseCase;
}

const useCartViewModel = ({ cartUseCase }: Injections) => {
  const { total, cart, removeFromCart } = cartUseCase.useCart();

  return {
    isEmpty: total === 0,
    books: cart,
    removeBook: (id: number) => removeFromCart(id),
  };
};

// You can skip generic union type (injections) here if no custom arguments are needed for ViewModel
export const cartViewModel = () =>
  DI.inject("cartUseCase", "signalService")(useCartViewModel);

export type CartViewModel = ReturnType<typeof cartViewModel>;
