import type { Http } from "../../http";
export declare var createCommonApi: (http: Http) => {
  getProfile$: () => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      id: string;
      username: string;
    };
  }>;
  deleteProfile$: () => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: unknown;
  }>;
};
