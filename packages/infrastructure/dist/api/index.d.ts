import type { Http } from "../http";
export declare var createApi: (http: Http) => {
  common: {
    getProfile$: () => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: {
        id: string;
        username: string;
      };
    }>;
    deleteProfile$: () => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: unknown;
    }>;
  };
  auth: {
    register$: (
      dto: import("./auth/schemas").RegisterDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: unknown;
    }>;
    login$: (
      dto: import("./auth/schemas").LoginDto["Request"],
    ) => import("rxjs").Observable<{
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
  settings: {
    get$: () => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: {
        currency: string;
        updatedAt: string;
      };
    }>;
    set$: (
      dto: import("./settings/schemas").SetDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: {
        currency: string;
        updatedAt: string;
      };
    }>;
  };
  categories: {
    getAll$: (
      dto?: import("./categories/schemas").GetAllDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    getOne$: (
      dto: import("./categories/schemas").GetOneDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    create$: (
      dto: import("./categories/schemas").CreateDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    update$: (
      dto: import("./categories/schemas").UpdateDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    delete$: (
      dto: import("./categories/schemas").DeleteDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: unknown;
    }>;
    getAvailableBudget$: (
      dto: import("./categories/schemas").AvailableBudgetDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: {
        isLimitless: boolean;
        availableBudget: string;
      };
    }>;
  };
  expenses: {
    getAll$: (
      dto: import("./expenses/schemas").GetAllDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    getOne$: (
      dto: import("./expenses/schemas").GetOneDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    create$: (
      dto: import("./expenses/schemas").CreateDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    update$: (
      dto: import("./expenses/schemas").UpdateDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
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
    delete$: (
      dto: import("./expenses/schemas").DeleteDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: unknown;
    }>;
    getTotalPrice$: (
      dto: import("./expenses/schemas").TotalPriceDto["Request"],
    ) => import("rxjs").Observable<{
      status: "success" | "error";
      message: string;
      data: string;
    }>;
  };
};
export type Api = ReturnType<typeof createApi>;
