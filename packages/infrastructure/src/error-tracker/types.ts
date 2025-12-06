export interface Issue<T = unknown> {
  message?: string;
  location?: string;
  error: T;
}

export interface Tracker {
  capture<T = unknown>(error: Issue<T>): void;
}

export interface TrackerConfig {
  isEnabled: boolean;
}
