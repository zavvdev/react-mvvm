import type { Http } from "../../http";
import {
  type AvailableBudgetDto,
  type CreateDto,
  type DeleteDto,
  type GetAllDto,
  type GetOneDto,
  type UpdateDto,
} from "./schemas";
export declare var createCategoriesApi: (http: Http) => {
  getAll$: (dto?: GetAllDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      isLimitless: () => boolean;
      id: string;
      name: string;
      budgetLimit: string | null;
      allowOverBudget: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
  }>;
  getOne$: (dto: GetOneDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      isLimitless: () => boolean;
      id: string;
      name: string;
      budgetLimit: string | null;
      allowOverBudget: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }>;
  create$: (dto: CreateDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      isLimitless: () => boolean;
      id: string;
      name: string;
      budgetLimit: string | null;
      allowOverBudget: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }>;
  update$: (dto: UpdateDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      isLimitless: () => boolean;
      id: string;
      name: string;
      budgetLimit: string | null;
      allowOverBudget: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }>;
  delete$: (dto: DeleteDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: unknown;
  }>;
  getAvailableBudget$: (
    dto: AvailableBudgetDto["Request"],
  ) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      isLimitless: boolean;
      availableBudget: string;
    };
  }>;
};
