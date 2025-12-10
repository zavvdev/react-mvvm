import type { SharedRepositories } from "@/_shared/infrastructure/repositories";
import type { SignalService } from "@/_shared/application/services/signal/signal.service";
import type { QuerySignalService } from "@/_shared/application/services/query-signal/query-signal.service";

export interface SharedDiDependencies {
  sharedApi: SharedRepositories;
  signalService: SignalService;
  querySignalService: QuerySignalService;
}
