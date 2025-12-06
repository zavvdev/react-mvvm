import type { Api } from "@react-mvvm/infrastructure";
import { z as t } from "zod";

export var envSchema = t.object({
  VITE_API_URL: t.url(),
});

export type Env = t.infer<typeof envSchema>;

export interface Config {
  apiUrl: string;
}

export interface CoreDependencies {
  config: Config;
  api: Api;
}
