import { CONFIG } from "@/_shared/infrastructure/config";
import {
  QueryClientProvider,
  useQueryClient,
  QueryClient,
  useQuery,
  useMutation,
  useInfiniteQuery,
} from "@tanstack/react-query";

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
  useQuerySignalClient: useQueryClient,
  useQuerySignal: useQuery,
  useMutationSignal: useMutation,
  useInfiniteQuerySignal: useInfiniteQuery,
};

export type QuerySignalService = typeof querySignalService;
