import type { Http } from "../../http";
import { type SetDto } from "./schemas";
export declare var createSettingsApi: (http: Http) => {
  get$: () => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      currency: string;
      updatedAt: string;
    };
  }>;
  set$: (dto: SetDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      currency: string;
      updatedAt: string;
    };
  }>;
};
