import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import { QUERY_KEYS } from "@/application/services/query-signal/query-signal.service.config";
import { repositories } from "@/infrastructure/repositories";

export const booksQuerySignal = querySignalService.createQuerySignal(() => ({
  queryKey: [QUERY_KEYS.books],
  queryFn: () => repositories.books.getBooks(),
}));

export type BooksQuerySignal = typeof booksQuerySignal;
