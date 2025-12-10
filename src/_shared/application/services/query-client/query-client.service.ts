import { CONFIG } from "@/_shared/infrastructure/config";
import {
  QueryClientProvider as QueryClientProvider_,
  useQueryClient,
  QueryClient,
  useQuery,
  useMutation,
  useInfiniteQuery,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CONFIG.cacheTime.lvl1,
    },
  },
});

export const QueryClientProvider = QueryClientProvider_;

export const queryClientService = (() => {
  return {
    useQueryClient,
    useQuery,
    useMutation,
    useInfiniteQuery,
  };
})();

export type QueryClientService = typeof queryClientService;
