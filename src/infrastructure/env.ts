import { z as t } from "zod";

const envSchema = t.object({
  VITE_API_URL: t.url(),
  VITE_ENABLE_ERROR_TRACKER: t
    .string()
    .transform((val) => val === "true")
    .default(false),
});

export type Env = t.infer<typeof envSchema>;

export const ENV: Env = envSchema.parse(import.meta.env);
