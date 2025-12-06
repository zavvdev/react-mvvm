import type { Issue, Tracker, TrackerConfig } from "./types";

export var TRACKER_DEFAULT_CONFIG: TrackerConfig = {
  isEnabled: true,
};

export var TRACKER_DEFAULT: Tracker = {
  capture: <T = unknown>(error: Issue<T>): void => {
    console.error(error);
  },
};
