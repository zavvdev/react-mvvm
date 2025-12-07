import type { PostModel } from "@react-mvvm/domain";
import type { Api } from "@react-mvvm/infrastructure";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useViewModel } from "./posts.vm";

vi.mock("react-router", () => ({
  useNavigate: vi.fn(() => () => {}),
}));

describe("Posts ViewModel", () => {
  let api: Api;

  beforeEach(() => {
    api = {
      posts: {
        getAll: vi.fn(),
      },
    } as unknown as Api;
  });

  it("loads posts successfully", async () => {
    const posts: PostModel[] = [
      {
        id: 123,
        userId: 1,
        title: "Hello",
        body: "World",
        isTooLong: () => false,
      },
    ];

    api.posts.getAll = vi.fn(() =>
      Promise.resolve(posts),
    ) satisfies Api["posts"]["getAll"];

    const { result } = renderHook(() => useViewModel({ api }));

    await act(async () => {});

    expect(api.posts.getAll).toHaveBeenCalled();
    expect(result.current.posts).toEqual(posts);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
    expect(result.current.success).toBe(true);
  });

  it("handles API error", async () => {
    api.posts.getAll = vi.fn(() =>
      Promise.reject(new Error("Boom")),
    ) satisfies Api["posts"]["getAll"];

    const { result } = renderHook(() => useViewModel({ api }));

    await act(async () => {});

    expect(result.current.posts).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Boom");
    expect(result.current.success).toBe(false);
  });
});
