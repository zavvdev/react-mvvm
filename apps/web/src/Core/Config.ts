import type { Config, Env } from "@/core/types";

export var createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,

  authTokenName: "_t",

  publicRoutes: {
    auth: () => "/auth",
  },

  privateRoutes: {
    dashboard: () => "/dashboard",
  },
});
