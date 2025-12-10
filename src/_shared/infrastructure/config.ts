import { ENV } from "@/_shared/infrastructure/env";

export const CONFIG = {
  apiUrl: ENV.VITE_API_URL,
  isErrorTrackerEnabled: ENV.VITE_ENABLE_ERROR_TRACKER,
  cacheTime: {
    lvl1: 1000 * 60,
  },
};

export type Config = typeof CONFIG;
