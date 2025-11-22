export interface TokenStorage {
  get(): string | undefined;
  set(token: string): void;
  clear(): void;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
