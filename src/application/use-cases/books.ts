import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import { QUERY_KEYS } from "@/application/services/query-signal/query-signal.service.config";
import { repositories } from "@/infrastructure/repositories";
import { DI } from "@/application/di/di";
import type { SignalService } from "@/application/services/signal/signal.service";

export const booksQuerySignal = querySignalService.createQuerySignal(() => ({
  queryKey: [QUERY_KEYS.books],
  queryFn: () => repositories.books.getBooks(),
}));

interface Arguments {
  signalService: SignalService;
}

const useBooks_ = ({ signalService }: Arguments) => {
  const [{ data, isError, isLoading }] =
    signalService.useSignal(booksQuerySignal);

  return {
    data: data?.data ?? [],
    isError,
    isLoading,
  };
};

const useBooks = DI.inject<"signalService">("signalService")(useBooks_);

export const booksUseCase = {
  useBooks,
};

export type BooksUseCase = typeof booksUseCase;
