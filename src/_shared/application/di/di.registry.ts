import type { SharedDiDependencies } from "@/_shared/application/di/di.types";
import { sharedApi } from "@/_shared/application/data/shared-api.data";
import { signalService } from "@/_shared/application/services/signal/signal.service";
import { querySignalService } from "@/_shared/application/services/query-signal/query-signal.service";

export function registerSharedDI(): SharedDiDependencies {
  return {
    sharedApi,
    signalService,
    querySignalService,
  };
}
