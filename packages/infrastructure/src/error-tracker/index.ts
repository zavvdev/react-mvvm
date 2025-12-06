import { TRACKER_DEFAULT, TRACKER_DEFAULT_CONFIG } from "./config";
import type { Issue, Tracker, TrackerConfig } from "./types";

export class ErrorTracker {
  private readonly config: TrackerConfig;
  private readonly tracker: Tracker;

  constructor(
    args: {
      tracker?: Tracker;
      config?: TrackerConfig;
    } = {},
  ) {
    this.config = args.config ?? TRACKER_DEFAULT_CONFIG;
    this.tracker = args.tracker ?? TRACKER_DEFAULT;
  }

  public report<T = unknown>(error: Issue<T>, config?: TrackerConfig): void {
    var isEnabled = config?.isEnabled ?? this.config.isEnabled;

    var errorToReport = {
      message: error.message || "",
      location: error.location || "",
      error: error.error,
    } satisfies Issue<T>;

    if (isEnabled) {
      this.tracker.capture(errorToReport);
    }
  }
}
