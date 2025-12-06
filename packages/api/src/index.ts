import type { Http } from "@react-mvvm/http";
import { createAuthApi } from "./auth";
import { createCategoriesApi } from "./categories";
import { createCommonApi } from "./common";
import { createExpensesApi } from "./expenses";
import { createSettingsApi } from "./settings";

export { AUTH_HEADER, MESSAGES, RESPONSE_STATUS } from "./config";
export { AnyResponse } from "./schemas";

export var createApi = (http: Http) => {
  return {
    common: createCommonApi(http),
    auth: createAuthApi(http),
    settings: createSettingsApi(http),
    categories: createCategoriesApi(http),
    expenses: createExpensesApi(http),
  };
};

export type Api = ReturnType<typeof createApi>;
