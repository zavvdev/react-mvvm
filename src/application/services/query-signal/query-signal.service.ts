import {
  QueryClientProvider,
  QueryClient,
  useQuery,
  useMutation,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { CONFIG } from "@/infrastructure/config";

export const querySignalClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CONFIG.cacheTime.lvl1,
    },
  },
});

export const QuerySignalProvider = QueryClientProvider;
export type QuerySignalClient = QueryClient;

export const querySignalService = {
  querySignalClient,
  useQuerySignal: useQuery,
  useMutationSignal: useMutation,
  useInfiniteQuerySignal: useInfiniteQuery,
};

export type QuerySignalService = typeof querySignalService;
