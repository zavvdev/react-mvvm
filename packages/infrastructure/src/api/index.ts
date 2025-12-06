import type { Http } from "../http";
import { createAuthApi } from "./auth";
import { createCategoriesApi } from "./categories";
import { createCommonApi } from "./common";
import { createExpensesApi } from "./expenses";
import { createSettingsApi } from "./settings";

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
