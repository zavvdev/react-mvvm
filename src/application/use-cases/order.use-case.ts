import type { OrderMutationSignal } from "@/application/services/query-signal/mutations/order.mutations";
import type { SignalService } from "@/application/services/signal/signal.service";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";
import { Order } from "@/domain/models/order.model";

interface UseCaseDependencies {
  signalService: SignalService;
  orderMutationSignal: OrderMutationSignal;
  cartUseCase: CartUseCase;
}

interface UseCaseParams {
  onError?: (error: string) => void;
}

const createUseOrder =
  ({ signalService, orderMutationSignal, cartUseCase }: UseCaseDependencies) =>
  ({ onError }: UseCaseParams = {}) => {
    const { cart, clearCart } = cartUseCase.useCart();
    const [orderMutation] = signalService.useSignal(orderMutationSignal);

    const createOrder = (email: string) => {
      const order = Order.of({
        bookIds: cart.map((book) => book.id),
        email,
      });

      if (order.isEmpty()) {
        onError?.("cart_empty");
        return;
      }

      orderMutation.mutateAsync(order).then(clearCart);
    };

    return {
      createOrder,
      isLoading: orderMutation.isPending,
      isError: orderMutation.isError,
      isSuccess: orderMutation.isSuccess,
    };
  };

export const createOrderUseCase = (args: UseCaseDependencies) => ({
  useOrder: createUseOrder(args),
});

export type OrderUseCase = ReturnType<typeof createOrderUseCase>;
