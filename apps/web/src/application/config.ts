import type { Config, Env } from "@/application/types";

export const createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,
});
