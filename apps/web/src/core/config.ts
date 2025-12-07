import type { Config, Env } from "@/core/types";

export const createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,
});
