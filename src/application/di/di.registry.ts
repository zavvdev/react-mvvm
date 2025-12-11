import type { DiDependencies } from "@/application/di/di.types";
import { api } from "@/application/data/api.data";
import { signalService } from "@/application/services/signal/signal.service";
import { querySignalService } from "@/application/services/query-signal/query-signal.service";

export function registerDI(): DiDependencies {
  return {
    api,
    signalService,
    querySignalService,
  };
}
