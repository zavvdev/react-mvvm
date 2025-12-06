export interface AuthTokenStorage {
  get(): string | undefined;
  set(token: string): void;
  clear(): void;
}

export interface AuthLoginCredentials {
  username: string;
  password: string;
}
