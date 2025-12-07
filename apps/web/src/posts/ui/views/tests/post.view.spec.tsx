import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PostViewModelResult } from "../../view-models/post.vm";
import { View } from "../post.view";

const mockVM = (overrides: Partial<PostViewModelResult>) => () => ({
  post: overrides.post ?? null,
  loading: overrides.loading ?? false,
  error: overrides.error ?? "",
  success: overrides.success ?? false,
});

describe("Post", () => {
  it("renders loading component when loading is true", () => {
    render(<View useViewModel={mockVM({ loading: true })} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error tile when error exists", () => {
    render(<View useViewModel={mockVM({ error: "Something bad happened" })} />);
    expect(screen.getByText("Something bad happened")).toBeInTheDocument();
  });

  it("renders post content when success is true", () => {
    render(
      <View
        useViewModel={mockVM({
          success: true,
          post: {
            id: 1,
            userId: 1,
            title: "Post Title",
            body: "Post body content",
            isTooLong: () => false,
          },
        })}
      />,
    );

    expect(screen.getByText("Post Title")).toBeInTheDocument();
    expect(screen.getByText("Post body content")).toBeInTheDocument();
  });
});
