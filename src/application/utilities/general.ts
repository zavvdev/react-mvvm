import { errorTrackerService } from "@/infrastructure/services/error-tracker/error-tracker.service";

export function reportCriticalAppError(error: unknown) {
  errorTrackerService.report({
    message: "Application critical error",
    error,
  });
}
