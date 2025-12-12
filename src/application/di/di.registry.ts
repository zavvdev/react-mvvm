import { repositories } from "@/infrastructure/repositories";
import type { DiContainer } from "@/application/di/di.types";
import { signalService } from "@/application/services/signal/signal.service";
import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import { cartUseCase } from "@/application/use-cases/cart";
import { booksUseCase } from "@/application/use-cases/books";

export function registerDiContainer(): DiContainer {
  return {
    repositories,
    signalService,
    querySignalService,
    cartUseCase,
    booksUseCase,
  };
}
