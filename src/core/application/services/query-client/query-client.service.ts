import { CONFIG } from "@/core/infrastructure/config";
import {
  QueryClientProvider,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

export const queryClientService = (() => {
  const instance = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CONFIG.cacheTime.lvl1,
      },
    },
  });

  return {
    Provider: QueryClientProvider,
    useQueryClient,
    instance,
  };
})();

export type QueryClientService = typeof queryClientService;
