import type { OrderMutationSignal } from "@/application/services/query-signal/mutations/order.mutations";
import type { BooksQuerySignal } from "@/application/services/query-signal/queries/books.queries";
import type { QuerySignalService } from "@/application/services/query-signal/query-signal.service";
import type { SignalService } from "@/application/services/signal/signal.service";
import type { CartSignal } from "@/application/services/signal/signals/cart.signals";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";
import type { OrderUseCase } from "@/application/use-cases/order.use-case";
import type { Repositories } from "@/infrastructure/repositories";

export interface DiContainer {
  repositories: Repositories;

  signalService: SignalService;
  cartSignal: CartSignal;

  querySignalService: QuerySignalService;
  booksQuerySignal: BooksQuerySignal;
  orderMutationSignal: OrderMutationSignal;

  cartUseCase: CartUseCase;
  orderUseCase: OrderUseCase;
}
