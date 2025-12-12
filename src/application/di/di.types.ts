import type { Repositories } from "@/infrastructure/repositories";
import type { SignalService } from "@/application/services/signal/signal.service";
import type { QuerySignalService } from "@/application/services/query-signal/query-signal.service";
import type { CartUseCase } from "@/application/use-cases/cart";
import type { BooksUseCase } from "@/application/use-cases/books";

export interface DiContainer {
  repositories: Repositories;
  signalService: SignalService;
  querySignalService: QuerySignalService;
  cartUseCase: CartUseCase;
  booksUseCase: BooksUseCase;
}
