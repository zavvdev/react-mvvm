import { tap } from "rxjs";
export class Auth {
  constructor({ api, tokenStorage }) {
    this.api = api;
    this.tokenStorage = tokenStorage;
  }
  login$({ username, password }) {
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
