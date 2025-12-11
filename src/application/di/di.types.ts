import type { Repositories } from "@/infrastructure/repositories";
import type { SignalService } from "@/application/services/signal/signal.service";
import type { QuerySignalService } from "@/application/services/query-signal/query-signal.service";

export interface DiDependencies {
  api: Repositories;
  signalService: SignalService;
  querySignalService: QuerySignalService;
}
