import type { Config, Env } from "@/infrastructure/types";

export var createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,

  authTokenName: "_t",

  publicRoutes: {
    auth: () => "/auth",
  },

  privateRoutes: {
    profile: () => "/profile",
    settings: () => "/settings",
    expenses: () => "/expenses",
  },
});
