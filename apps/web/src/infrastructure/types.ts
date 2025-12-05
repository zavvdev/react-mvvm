import { z as t } from "zod";

export var envSchema = t.object({
  VITE_API_URL: t.url(),
});

export type Env = t.infer<typeof envSchema>;

export interface Config {
  apiUrl: string;

  authTokenName: string;

  publicRoutes: {
    auth: () => string;
  };

  privateRoutes: {
    profile: () => string;
    settings: () => string;
    expenses: () => string;
  };
}
