import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { ErrorTile } from "./index";

describe("ErrorTile", () => {
  it("should render a component", () => {
    render(<ErrorTile>Test</ErrorTile>);
    screen.getByText("Test");
  });
});
