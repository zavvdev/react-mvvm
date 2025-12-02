import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainTemplate } from "../../templates/main-template";

describe("MainTemplate", () => {
  it("should render a component", () => {
    render(
      <MainTemplate
        menu={[
          {
            id: 1,
            label: "Test",
            onClick: () => {},
            isVisible: true,
          },
        ]}
      >
        Test
      </MainTemplate>,
    );
    screen.getByText("Test");
  });
});
