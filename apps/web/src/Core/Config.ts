import type { Config } from "@/Core/Types/Config";
import type { Env } from "@/Core/Types/Env";

export var createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,
});
