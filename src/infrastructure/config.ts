import { ENV } from "@/infrastructure/env";

export const CONFIG = {
  apiUrl: ENV.VITE_API_URL,
  isErrorTrackerEnabled: ENV.VITE_ENABLE_ERROR_TRACKER,
  cacheTime: {
    lvl1: 1000 * 60,
  },
};
