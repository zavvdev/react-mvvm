import type { Api } from "@react-mvvm/api";
import type { LoginCredentials, TokenStorage } from "./types";

export { LoginCredentials, TokenStorage } from "./types";

export class Auth {
  private api: Api;
  private tokenStorage: TokenStorage;

  constructor({ api, tokenStorage }: { api: Api; tokenStorage: TokenStorage }) {
    this.api = api;
    this.tokenStorage = tokenStorage;
  }

  login({ username, password }: LoginCredentials) {
    return this.api.auth.login({ username, password }).then((response) => {
      this.tokenStorage.set(response.data.token);
    });
  }

  logout() {
    return this.api.auth.logout().then(() => {
      this.tokenStorage.clear();
    });
  }

  isLoggedIn() {
    return Boolean(this.tokenStorage.get());
  }
}
