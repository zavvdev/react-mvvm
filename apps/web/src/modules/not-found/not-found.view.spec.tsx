import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NotFound } from "./not-found.view";

describe("NotFound", () => {
  it("should render the view", () => {
    render(<NotFound />);
    expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
  });
});
