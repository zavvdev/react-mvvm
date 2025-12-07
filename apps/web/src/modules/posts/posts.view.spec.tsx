import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { View } from "./posts.view"; // make sure View is exported
import type { ViewModelResult } from "./posts.vm";

const mockVM = (overrides: Partial<ViewModelResult>) => () => ({
  posts: overrides.posts ?? [],
  loading: overrides.loading ?? false,
  error: overrides.error ?? "",
  success: overrides.success ?? false,
  onViewPost: overrides.onViewPost ?? (() => {}),
});

describe("Posts", () => {
  it("renders loading state", () => {
    render(<View useViewModel={mockVM({ loading: true })} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<View useViewModel={mockVM({ error: "Failed to load" })} />);
    expect(screen.getByText("Failed to load")).toBeInTheDocument();
  });

  it("renders posts when success=true", () => {
    const posts = [
      { id: 1, userId: 1, title: "A", body: "AAA", isTooLong: () => false },
      { id: 2, userId: 2, title: "B", body: "BBB", isTooLong: () => false },
    ];

    render(<View useViewModel={mockVM({ success: true, posts })} />);

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("AAA")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("BBB")).toBeInTheDocument();
  });

  it("invokes onViewPost when a post is opened", () => {
    const onViewPost = vi.fn();

    const posts = [
      { id: 10, userId: 1, title: "A", body: "AAA", isTooLong: () => false },
    ];

    render(
      <View
        useViewModel={mockVM({
          success: true,
          posts,
          onViewPost,
        })}
      />,
    );

    fireEvent.click(screen.getByText("Open"));

    expect(onViewPost).toHaveBeenCalledWith(10);
  });
});
