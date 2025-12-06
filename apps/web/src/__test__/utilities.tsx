import { render } from "vitest-browser-react";
import { bootstrap } from "@/application/bootstrap";
import type { Env } from "@/core/types";

var testEnv: Env = {
  VITE_API_URL: "http://test:3001/api",
};

export var testUtils = {
  render: (
    children: React.ReactNode,
    env: Env = testEnv,
    error: React.ReactNode = null,
  ) => {
    return bootstrap(render)(
      () => children,
      () => error,
    )(env);
  },
};
