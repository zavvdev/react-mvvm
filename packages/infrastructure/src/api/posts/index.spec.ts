import { of } from "rxjs";
import { describe, expect, it, vi } from "vitest";
import type { Http } from "../../http";
import { createPostsApi } from "./index";

describe("createPostsApi", () => {
  const mockHttp = {
    get$: vi.fn(),
    delete$: vi.fn(),
  } as unknown as Http;

  const postsApi = createPostsApi(mockHttp);

  it("getAll$ should call get$", () => {
    const response = [
      {
        id: 1,
        userId: 2,
        title: "Post 1",
        body: "Content 1",
      },
    ];

    mockHttp.get$ = vi.fn(() => of(response)) as Http["get$"];

    postsApi.getAll$().subscribe((res) => {
      expect(mockHttp.get$).toHaveBeenCalledWith("/posts");
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(expect.objectContaining(response[0]));
    });
  });

  it("delete$ should call http.delete$", () => {
    const requestDto = { id: "1" };
    mockHttp.delete$ = vi.fn(() => of()) as Http["delete$"];

    postsApi.delete$(requestDto).subscribe(() => {
      expect(mockHttp.delete$).toHaveBeenCalledWith("/posts/1");
    });
  });
});
