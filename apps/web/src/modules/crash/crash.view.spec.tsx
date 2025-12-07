import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Crash } from "./crash.view";

describe("Crash", () => {
  it("should render the view", () => {
    render(<Crash error={new Error("error message")} />);
    expect(screen.getByText("Application Crashed")).toBeInTheDocument();
    expect(screen.getByText("error message")).toBeInTheDocument();
  });
});
