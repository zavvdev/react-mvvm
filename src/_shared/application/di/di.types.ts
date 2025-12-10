import type { Repositories } from "@/_shared/infrastructure/repositories";
import type { QueryClientService } from "@/_shared/application/services/query-client/query-client.service";

export interface SharedDependencies {
  api: Repositories;
  queryClientService: QueryClientService;
}
