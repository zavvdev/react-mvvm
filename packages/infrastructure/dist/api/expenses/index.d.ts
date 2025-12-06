import type { Http } from "../../http";
import {
  type CreateDto,
  type DeleteDto,
  type GetAllDto,
  type GetOneDto,
  type TotalPriceDto,
  type UpdateDto,
} from "./schemas";
export declare var createExpensesApi: (http: Http) => {
  getAll$: (dto: GetAllDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      id: string;
      name: string;
      description: string | null;
      price: string;
      isCompleted: boolean;
      createdAt: string;
      updatedAt: string;
      category: {
        isLimitless: () => boolean;
        id: string;
        name: string;
        budgetLimit: string | null;
        allowOverBudget: boolean;
        createdAt: string;
        updatedAt: string;
      };
    }[];
  }>;
  getOne$: (dto: GetOneDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      id: string;
      name: string;
      description: string | null;
      price: string;
      isCompleted: boolean;
      createdAt: string;
      updatedAt: string;
      category: {
        isLimitless: () => boolean;
        id: string;
        name: string;
        budgetLimit: string | null;
        allowOverBudget: boolean;
        createdAt: string;
        updatedAt: string;
      };
    };
  }>;
  create$: (dto: CreateDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      id: string;
      name: string;
      description: string | null;
      price: string;
      isCompleted: boolean;
      createdAt: string;
      updatedAt: string;
      category: {
        isLimitless: () => boolean;
        id: string;
        name: string;
        budgetLimit: string | null;
        allowOverBudget: boolean;
        createdAt: string;
        updatedAt: string;
      };
    };
  }>;
  update$: (dto: UpdateDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: {
      id: string;
      name: string;
      description: string | null;
      price: string;
      isCompleted: boolean;
      createdAt: string;
      updatedAt: string;
      category: {
        isLimitless: () => boolean;
        id: string;
        name: string;
        budgetLimit: string | null;
        allowOverBudget: boolean;
        createdAt: string;
        updatedAt: string;
      };
    };
  }>;
  delete$: (dto: DeleteDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: unknown;
  }>;
  getTotalPrice$: (dto: TotalPriceDto["Request"]) => import("rxjs").Observable<{
    status: "error" | "success";
    message: string;
    data: string;
  }>;
};
