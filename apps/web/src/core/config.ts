import type { Config, Env } from "./types";

export var createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,
  authTokenName: "_t",
});
