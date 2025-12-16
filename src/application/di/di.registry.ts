import type { DiContainer } from "@/application/di/di.types";
import { orderMutationSignal } from "@/application/services/query-signal/mutations/order.mutations";
import { booksQuerySignal } from "@/application/services/query-signal/queries/books.queries";
import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import { signalService } from "@/application/services/signal/signal.service";
import { cartSignal } from "@/application/services/signal/signals/cart.signals";
import { createCartUseCase } from "@/application/use-cases/cart.use-case";
import { createOrderUseCase } from "@/application/use-cases/order.use-case";
import { repositories } from "@/infrastructure/repositories";

export function registerDiContainer(): DiContainer {
  const cartUseCase = createCartUseCase({ signalService, cartSignal });

  return {
    repositories,

    signalService,
    cartSignal,

    querySignalService,
    booksQuerySignal,
    orderMutationSignal,

    cartUseCase,
    orderUseCase: createOrderUseCase({
      signalService,
      orderMutationSignal,
      cartUseCase,
    }),
  };
}
