import type { SharedDependencies } from "@/_shared/application/di/di.types";
import { api } from "@/_shared/application/data/api.data";
import { queryClientService } from "@/_shared/application/services/query-client/query-client.service";

export function registerSharedDI(): SharedDependencies {
  return {
    api,
    queryClientService,
  };
}
