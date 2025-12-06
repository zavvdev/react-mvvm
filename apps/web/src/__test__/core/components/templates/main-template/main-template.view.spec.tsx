import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { testUtils } from "@/__test__/utilities";
import { View as MainTemplateView } from "@/core/components/templates/main-template/main-template.view";

describe("MainTemplate View", () => {
  it("should render a component", () => {
    testUtils.render(
      <MainTemplateView
        useViewModel={() => ({
          menu: [
            {
              id: "profile",
              label: "Profile",
              isVisible: true,
              onClick: () => {},
            },
            {
              id: "settings",
              label: "Settings",
              isVisible: false,
              onClick: () => {},
            },
          ],
        })}
      >
        Test
      </MainTemplateView>,
    );

    screen.getByText("Test");

    fireEvent.click(screen.getByTestId("burger-button"));

    screen.getByText("Profile");
    expect(screen.queryByText("Settings")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("close-button"));

    expect(screen.queryByText("Profile")).not.toBeInTheDocument();
  });
});
