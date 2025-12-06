import type { Api } from "../api";
import type { AuthLoginCredentials, AuthTokenStorage } from "./types";
export declare class Auth {
  private api;
  private tokenStorage;
  constructor({
    api,
    tokenStorage,
  }: {
    api: Api;
    tokenStorage: AuthTokenStorage;
  });
  login$({
    username,
    password,
  }: AuthLoginCredentials): import("rxjs").Observable<{
    status: "success" | "error";
    message: string;
    data: {
      token: string;
    };
  }>;
  logout$(): import("rxjs").Observable<{
    status: "success" | "error";
    message: string;
    data: unknown;
  }>;
  isLoggedIn(): boolean;
}
