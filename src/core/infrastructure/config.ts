import { ENV } from "@/core/infrastructure/env";

export const CONFIG = {
  apiUrl: ENV.VITE_API_URL,
  isErrorTrackerEnabled: ENV.VITE_ENABLE_ERROR_TRACKER,
  cacheTime: {
    lvl1: 3000,
  },
};

export type Config = typeof CONFIG;
