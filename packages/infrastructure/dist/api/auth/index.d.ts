import type { Http } from "../../http";
import { type LoginDto, type RegisterDto } from "./schemas";
export declare var createAuthApi: (http: Http) => {
  register$: (dto: RegisterDto["Request"]) => import("rxjs").Observable<{
    status: "success" | "error";
    message: string;
    data: unknown;
  }>;
  login$: (dto: LoginDto["Request"]) => import("rxjs").Observable<{
    status: "success" | "error";
    message: string;
    data: {
      token: string;
    };
  }>;
  logout$: () => import("rxjs").Observable<{
    status: "success" | "error";
    message: string;
    data: unknown;
  }>;
};
