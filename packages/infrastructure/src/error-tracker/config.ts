import type { Issue, Tracker, TrackerConfig } from "./types";

export const TRACKER_DEFAULT_CONFIG: TrackerConfig = {
  isEnabled: true,
};

export const TRACKER_DEFAULT: Tracker = {
  capture: <T = unknown>(error: Issue<T>): void => {
    console.error(error);
  },
};
