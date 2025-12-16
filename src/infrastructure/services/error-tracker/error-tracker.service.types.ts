export interface Issue<T = unknown> {
  message?: string;
  location?: string;
  error: T;
}

export interface Config {
  isEnabled: boolean;
}
