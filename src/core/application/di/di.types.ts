import type { Config } from "@/core/infrastructure/config";
import type { Repositories } from "@/core/infrastructure/repositories";

export interface CoreDependencies {
  config: Config;
  repositories: Repositories;
}
