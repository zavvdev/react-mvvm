import { QueryClient } from "@tanstack/react-query";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { CONFIG } from "@/infrastructure/config";

const querySignalClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CONFIG.cacheTime.lvl1,
      retry: 0,
    },
  },
});

export const querySignalService = {
  querySignalClient,

  createQuerySignal: ((options: Parameters<typeof atomWithQuery>[0]) =>
    atomWithQuery(options, () => querySignalClient)) as typeof atomWithQuery,

  createMutationSignal: ((options: Parameters<typeof atomWithMutation>[0]) =>
    atomWithMutation(
      options,
      () => querySignalClient,
    )) as typeof atomWithMutation,
};

export type QuerySignalService = typeof querySignalService;
