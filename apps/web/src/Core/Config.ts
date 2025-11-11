import type { Env } from "@/Core/Types/Env";
import type { Config } from "@/Core/Types/Config";

export var createConfig = (env: Env): Config => ({
  apiUrl: env.VITE_API_URL,
});
