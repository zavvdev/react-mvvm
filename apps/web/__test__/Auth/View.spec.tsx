import { expect, test } from "vitest";
import { AuthView } from "../../src/Auth/View";
import { container } from "../../src/di";
import { testUtils } from "../Utilities";

test("AuthView", async () => {
  var mockAuthViewModel = () => ({
    clickLogin: () => {
      console.log("TEST -- Login clicked");
    },
    clickRegister: () => {
      console.log("TEST -- Register clicked");
    },
  });

  container.override("AuthViewModel", () => mockAuthViewModel);

  var { getByText } = await testUtils.render(<AuthView />);

  await expect.element(getByText("Auth View Component")).toBeInTheDocument();
});

test("some", () => {
  expect(1 + 1).toBe(2);
});
