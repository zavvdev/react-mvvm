import { CONFIG } from "@/infrastructure/config";
import type {
  Config,
  Issue,
} from "@/infrastructure/services/error-tracker/error-tracker.service.types";

class ErrorTrackerService {
  private readonly repository: Console;
  private readonly config: Config;

  constructor(repo: Console, config: Config) {
    this.repository = repo;
    this.config = config;
  }

  public report<T = unknown>(error: Issue<T>): void {
    const errorToReport = {
      message: error.message || null,
      location: error.location || null,
      error: error.error,
    };
    if (this.config.isEnabled) {
      this.repository.error(errorToReport);
    }
  }
}

export const errorTrackerService = new ErrorTrackerService(console, {
  isEnabled: CONFIG.isErrorTrackerEnabled,
});
