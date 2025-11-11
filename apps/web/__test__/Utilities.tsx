import { render } from "vitest-browser-react";
import { bootstrap } from "../src/Core/Bootstrap.tsx";
import type { Env } from "../src/Core/Types/Env.ts";

var testEnv: Env = {
  VITE_API_URL: "http://localhost:3000/api",
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
