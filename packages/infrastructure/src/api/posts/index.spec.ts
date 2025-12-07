import { describe, expect, it, vi } from "vitest";
import type { Http } from "../../http";
import { createPostsApi } from "./index";

describe("createPostsApi", () => {
  const mockHttp = {
    get: vi.fn(),
    delete: vi.fn(),
  } as unknown as Http;

  const postsApi = createPostsApi(mockHttp);

  it("getAll should call http.get", () => {
    const response = [
      {
        id: 1,
        userId: 2,
        title: "Post 1",
        body: "Content 1",
      },
    ];

    mockHttp.get = vi.fn(() => Promise.resolve(response)) as Http["get"];

    postsApi.getAll().then((res) => {
      expect(mockHttp.get).toHaveBeenCalledWith("/posts");
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(expect.objectContaining(response[0]));
    });
  });

  it("getOne should call http.get", () => {
    const requestDto = { id: "1" };

    const response = {
      id: 1,
      userId: 2,
      title: "Post 1",
      body: "Content 1",
    };

    mockHttp.get = vi.fn(() => Promise.resolve(response)) as Http["get"];

    postsApi.getOne(requestDto).then(() => {
      expect(mockHttp.get).toHaveBeenCalledWith("/posts/1");
    });
  });
});
