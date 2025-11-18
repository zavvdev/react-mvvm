import type { Http } from "@react-mvvm/http";
import { createAuthApi } from "./auth";

export { AUTH_HEADER, MESSAGES, RESPONSE_STATUS } from "./config";
export { AnyResponse } from "./schemas";

export function createApi(http: Http) {
  return {
    auth: createAuthApi(http),
  };
}

export type Api = ReturnType<typeof createApi>;
