import { tap } from "rxjs";
import type { Api } from "../api";
import type { AuthLoginCredentials, AuthTokenStorage } from "./types";

export class Auth {
  private api: Api;
  private tokenStorage: AuthTokenStorage;

  constructor({
    api,
    tokenStorage,
  }: { api: Api; tokenStorage: AuthTokenStorage }) {
    this.api = api;
    this.tokenStorage = tokenStorage;
  }

  login$({ username, password }: AuthLoginCredentials) {
    return this.api.auth.login$({ username, password }).pipe(
      tap((response) => {
        this.tokenStorage.set(response.data.token);
      }),
    );
  }

  logout$() {
    return this.api.auth.logout$().pipe(
      tap(() => {
        this.tokenStorage.clear();
      }),
    );
  }

  isLoggedIn() {
    return Boolean(this.tokenStorage.get());
  }
}
