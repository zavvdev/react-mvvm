import { z as t } from "zod";
export declare var getAllDto: {
  request: t.ZodOptional<
    t.ZodObject<
      {
        categoryId: t.ZodOptional<t.ZodString>;
        isCompleted: t.ZodOptional<t.ZodBoolean>;
        name: t.ZodOptional<t.ZodString>;
        minPrice: t.ZodOptional<t.ZodString>;
        maxPrice: t.ZodOptional<t.ZodString>;
        minDate: t.ZodOptional<t.ZodString>;
        maxDate: t.ZodOptional<t.ZodString>;
      },
      t.core.$strip
    >
  >;
  response: t.ZodObject<
    {
      status: t.ZodEnum<{
        error: "error";
        success: "success";
      }>;
      message: t.ZodString;
      data: t.ZodArray<
        t.ZodObject<
          {
            id: t.ZodUUID;
            name: t.ZodString;
            description: t.ZodNullable<t.ZodString>;
            price: t.ZodString;
            isCompleted: t.ZodBoolean;
            createdAt: t.ZodString;
            updatedAt: t.ZodString;
            category: t.ZodPipe<
              t.ZodObject<
                {
                  id: t.ZodUUID;
                  name: t.ZodString;
                  budgetLimit: t.ZodNullable<t.ZodString>;
                  allowOverBudget: t.ZodBoolean;
                  createdAt: t.ZodString;
                  updatedAt: t.ZodString;
                },
                t.core.$strip
              >,
              t.ZodTransform<
                {
                  isLimitless: () => boolean;
                  id: string;
                  name: string;
                  budgetLimit: string | null;
                  allowOverBudget: boolean;
                  createdAt: string;
                  updatedAt: string;
                },
                {
                  id: string;
                  name: string;
                  budgetLimit: string | null;
                  allowOverBudget: boolean;
                  createdAt: string;
                  updatedAt: string;
                }
              >
            >;
          },
          t.core.$strip
        >
      >;
    },
    t.core.$strip
  >;
};
export type GetAllDto = {
  Request: t.infer<typeof getAllDto.request>;
  Response: t.infer<typeof getAllDto.response>;
};
export declare var getOneDto: {
  request: t.ZodObject<
    {
      id: t.ZodString;
    },
    t.core.$strip
  >;
  response: t.ZodObject<
    {
      status: t.ZodEnum<{
        error: "error";
        success: "success";
      }>;
      message: t.ZodString;
      data: t.ZodObject<
        {
          id: t.ZodUUID;
          name: t.ZodString;
          description: t.ZodNullable<t.ZodString>;
          price: t.ZodString;
          isCompleted: t.ZodBoolean;
          createdAt: t.ZodString;
          updatedAt: t.ZodString;
          category: t.ZodPipe<
            t.ZodObject<
              {
                id: t.ZodUUID;
                name: t.ZodString;
                budgetLimit: t.ZodNullable<t.ZodString>;
                allowOverBudget: t.ZodBoolean;
                createdAt: t.ZodString;
                updatedAt: t.ZodString;
              },
              t.core.$strip
            >,
            t.ZodTransform<
              {
                isLimitless: () => boolean;
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              },
              {
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              }
            >
          >;
        },
        t.core.$strip
      >;
    },
    t.core.$strip
  >;
};
export type GetOneDto = {
  Request: t.infer<typeof getOneDto.request>;
  Response: t.infer<typeof getOneDto.response>;
};
export declare var createDto: {
  request: t.ZodObject<
    {
      categoryId: t.ZodString;
      name: t.ZodString;
      price: t.ZodString;
      isCompleted: t.ZodBoolean;
      description: t.ZodOptional<t.ZodString>;
    },
    t.core.$strip
  >;
  response: t.ZodObject<
    {
      status: t.ZodEnum<{
        error: "error";
        success: "success";
      }>;
      message: t.ZodString;
      data: t.ZodObject<
        {
          id: t.ZodUUID;
          name: t.ZodString;
          description: t.ZodNullable<t.ZodString>;
          price: t.ZodString;
          isCompleted: t.ZodBoolean;
          createdAt: t.ZodString;
          updatedAt: t.ZodString;
          category: t.ZodPipe<
            t.ZodObject<
              {
                id: t.ZodUUID;
                name: t.ZodString;
                budgetLimit: t.ZodNullable<t.ZodString>;
                allowOverBudget: t.ZodBoolean;
                createdAt: t.ZodString;
                updatedAt: t.ZodString;
              },
              t.core.$strip
            >,
            t.ZodTransform<
              {
                isLimitless: () => boolean;
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              },
              {
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              }
            >
          >;
        },
        t.core.$strip
      >;
    },
    t.core.$strip
  >;
};
export type CreateDto = {
  Request: t.infer<typeof createDto.request>;
  Response: t.infer<typeof createDto.response>;
};
export declare var updateDto: {
  request: t.ZodObject<
    {
      id: t.ZodString;
      name: t.ZodString;
      description: t.ZodString;
      price: t.ZodString;
      isCompleted: t.ZodBoolean;
    },
    t.core.$strip
  >;
  response: t.ZodObject<
    {
      status: t.ZodEnum<{
        error: "error";
        success: "success";
      }>;
      message: t.ZodString;
      data: t.ZodObject<
        {
          id: t.ZodUUID;
          name: t.ZodString;
          description: t.ZodNullable<t.ZodString>;
          price: t.ZodString;
          isCompleted: t.ZodBoolean;
          createdAt: t.ZodString;
          updatedAt: t.ZodString;
          category: t.ZodPipe<
            t.ZodObject<
              {
                id: t.ZodUUID;
                name: t.ZodString;
                budgetLimit: t.ZodNullable<t.ZodString>;
                allowOverBudget: t.ZodBoolean;
                createdAt: t.ZodString;
                updatedAt: t.ZodString;
              },
              t.core.$strip
            >,
            t.ZodTransform<
              {
                isLimitless: () => boolean;
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              },
              {
                id: string;
                name: string;
                budgetLimit: string | null;
                allowOverBudget: boolean;
                createdAt: string;
                updatedAt: string;
              }
            >
          >;
        },
        t.core.$strip
      >;
    },
    t.core.$strip
  >;
};
export type UpdateDto = {
  Request: t.infer<typeof updateDto.request>;
  Response: t.infer<typeof updateDto.response>;
};
export declare var deleteDto: {
  request: t.ZodObject<
    {
      id: t.ZodString;
    },
    t.core.$strip
  >;
};
export type DeleteDto = {
  Request: t.infer<typeof deleteDto.request>;
};
export declare var totalPriceDto: {
  request: t.ZodObject<
    {
      categoryIds: t.ZodOptional<t.ZodArray<t.ZodString>>;
      minDate: t.ZodNullable<t.ZodString>;
      maxDate: t.ZodNullable<t.ZodString>;
    },
    t.core.$strip
  >;
  response: t.ZodObject<
    {
      status: t.ZodEnum<{
        error: "error";
        success: "success";
      }>;
      message: t.ZodString;
      data: t.ZodString;
    },
    t.core.$strip
  >;
};
export type TotalPriceDto = {
  Request: t.infer<typeof totalPriceDto.request>;
  Response: t.infer<typeof totalPriceDto.response>;
};
