import { of } from "rxjs";
import { describe, expect, it, vi } from "vitest";
import type { Http } from "../../http";
import { createAuthApi } from "./index";

describe("createAuthApi", () => {
  var mockHttp = {
    post$: vi.fn(),
    delete$: vi.fn(),
  } as unknown as Http;

  var authApi = createAuthApi(mockHttp);

  it("register$ should call http.post$ with valid data", () => {
    var dto = { username: "test", password: "123456" };
    var response = { message: "ok", status: "success", data: null };
    mockHttp.post$ = vi.fn(() => of(response)) as Http["post$"];

    authApi.register$(dto).subscribe((res) => {
      expect(mockHttp.post$).toHaveBeenCalledWith("/auth/register", dto);
      expect(res).toEqual(response);
    });
  });

  it("login$ should call http.post$ and parse response", () => {
    var dto = { username: "test", password: "123456" };
    var response = {
      message: "ok",
      status: "success",
      data: { token: "abc123" },
    };
    mockHttp.post$ = vi.fn(() => of(response)) as Http["post$"];

    authApi.login$(dto).subscribe((res) => {
      expect(mockHttp.post$).toHaveBeenCalledWith("/auth/login", dto);
      expect(res).toEqual(response);
    });
  });

  it("logout$ should call http.delete$", () => {
    var response = { message: "ok", status: "success", data: null };
    mockHttp.delete$ = vi.fn(() => of(response)) as Http["delete$"];

    authApi.logout$().subscribe((res) => {
      expect(mockHttp.delete$).toHaveBeenCalledWith("/auth/logout");
      expect(res).toEqual(response);
    });
  });
});
