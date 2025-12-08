import type { CoreDependencies } from "@/core/application/di/di.types";

export const useApplicationViewModel = (): CoreDependencies => {
  const api = createApi(http);

  return {
    config,
    api,
  };
};

export type ApplicationViewModel = typeof useApplicationViewModel;
