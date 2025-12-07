import { ErrorTracker } from "@react-mvvm/infrastructure";

export const errorTracker = new ErrorTracker({
  tracker: {
    capture: (error) => {
      console.error("Captured error:", error);
    },
  },
  config: {
    isEnabled: true,
  },
});
