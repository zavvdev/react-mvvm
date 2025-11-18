import { z as t } from "zod";

export var envSchema = t.object({
  VITE_API_URL: t.url(),
});

export type Env = t.infer<typeof envSchema>;
