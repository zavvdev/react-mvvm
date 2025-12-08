import { z as t } from "zod";

export const envSchema = t.object({
  VITE_API_URL: t.url(),
});

export type Env = t.infer<typeof envSchema>;

export interface Config {
  apiUrl: string;
}
