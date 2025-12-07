import type { PostModel } from "@react-mvvm/domain";
import type { Api } from "@react-mvvm/infrastructure";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useViewModel } from "./post.vm";

vi.mock("react-router", () => ({
  useParams: vi.fn(() => ({ id: "123" })),
}));

describe("Post ViewModel", () => {
  let api: Api;

  beforeEach(() => {
    api = {
      posts: {
        getOne: vi.fn(),
      },
    } as unknown as Api;
  });

  it("loads post successfully", async () => {
    const post: PostModel = {
      id: 123,
      userId: 1,
      title: "Hello",
      body: "World",
      isTooLong: () => false,
    };

    api.posts.getOne = vi.fn(() =>
      Promise.resolve(post),
    ) satisfies Api["posts"]["getOne"];

    const { result } = renderHook(() => useViewModel({ api }));

    await act(async () => {});

    expect(api.posts.getOne).toHaveBeenCalledWith({ id: "123" });
    expect(result.current.post).toEqual(post);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
    expect(result.current.success).toBe(true);
  });

  it("handles API error", async () => {
    api.posts.getOne = vi.fn(() =>
      Promise.reject(new Error("Boom")),
    ) satisfies Api["posts"]["getOne"];

    const { result } = renderHook(() => useViewModel({ api }));

    await act(async () => {});

    expect(result.current.post).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Boom");
    expect(result.current.success).toBe(false);
  });
});
