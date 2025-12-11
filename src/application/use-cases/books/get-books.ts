import { api } from "@/application/data/api.data";
import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import { QUERY_KEYS } from "@/application/services/query-signal/query-signal.service.config";

// export const booksQuerySignal = querySignalService.useQuerySignal((get) => ({
//   queryKey: [QUERY_KEYS.books, get(idAtom)],
//   queryFn: () => {
//     return api.books.getBooks()
//   },
// }));
