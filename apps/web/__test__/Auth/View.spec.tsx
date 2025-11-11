import { expect, test } from "vitest";
import { AuthView } from "../../src/Auth/View";
import { container } from "../../src/di";
import { testUtils } from "../Utilities";

test("AuthView", () => {
  var mockAuthViewModel = () => ({
    clickLogin: () => {
      console.log("TEST -- Login clicked");
    },
    clickRegister: () => {
      console.log("TEST -- Register clicked");
    },
  });

  container.override("AuthViewModel", () => mockAuthViewModel);

  return testUtils.render(<AuthView />).then(({ getByText }) => {
    return expect.element(getByText("Auth View Component")).toBeInTheDocument();
  });
});

test("some", () => {
  expect(1 + 1).toBe(2);
});
