import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Loading } from "./index";

describe("Loading", () => {
  it("should render a component", () => {
    render(<Loading />);
    screen.getByText("Loading...");
  });
});
