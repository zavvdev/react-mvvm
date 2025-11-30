import type { Api } from "@react-mvvm/api";
import { of } from "rxjs";
import { describe, expect, test } from "vitest";
import { Auth } from "../src";
import type { TokenStorage } from "../src/types";

describe("Auth", () => {
  var api = {
    auth: {
      login$: (_req: { username: string; password: string }) =>
        of({
          status: "success",
          message: "ok",
          data: {
            token: "mock-token",
          },
        }),
      logout$: () =>
        of({
          status: "success",
          message: "ok",
          data: null,
        }),
    },
  } as any as Api;

  var tokenStorage = (): TokenStorage => {
    var storage: string | undefined;
    return {
      set: (token: string) => {
        storage = token;
      },
      get: () => storage,
      clear: () => {
        storage = undefined;
      },
    };
  };

  test("should pass login flow", () => {
    var auth = new Auth({ api, tokenStorage: tokenStorage() });

    auth
      .login$({ username: "user", password: "pass" })
      .subscribe((response) => {
        expect(response.data.token).toBe("mock-token");
        expect(auth.isLoggedIn()).toBe(true);
      });
  });

  test("should pass logout flow", () => {
    var auth = new Auth({ api, tokenStorage: tokenStorage() });

    auth.login$({ username: "user", password: "pass" }).subscribe(() => {
      expect(auth.isLoggedIn()).toBe(true);

      auth.logout$().subscribe((response) => {
        expect(response.status).toBe("success");
        expect(auth.isLoggedIn()).toBe(false);
      });
    });
  });
});
