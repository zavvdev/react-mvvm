import { z as t } from "zod";
export declare var getAllDto: {
    request: t.ZodOptional<t.ZodObject<{
        name: t.ZodOptional<t.ZodString>;
        minBudgetLimit: t.ZodOptional<t.ZodString>;
        maxBudgetLimit: t.ZodOptional<t.ZodString>;
        allowOverBudget: t.ZodOptional<t.ZodBoolean>;
        minDate: t.ZodOptional<t.ZodString>;
        maxDate: t.ZodOptional<t.ZodString>;
    }, t.core.$strip>>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodArray<t.ZodPipe<t.ZodObject<{
            id: t.ZodUUID;
            name: t.ZodString;
            budgetLimit: t.ZodNullable<t.ZodString>;
            allowOverBudget: t.ZodBoolean;
            createdAt: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>, t.ZodTransform<{
            isLimitless: () => boolean;
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }, {
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }>>>;
    }, t.core.$strip>;
};
export type GetAllDto = {
    Request: t.infer<typeof getAllDto.request>;
    Response: t.infer<typeof getAllDto.response>;
};
export declare var getOneDto: {
    request: t.ZodObject<{
        id: t.ZodString;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodPipe<t.ZodObject<{
            id: t.ZodUUID;
            name: t.ZodString;
            budgetLimit: t.ZodNullable<t.ZodString>;
            allowOverBudget: t.ZodBoolean;
            createdAt: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>, t.ZodTransform<{
            isLimitless: () => boolean;
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }, {
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }>>;
    }, t.core.$strip>;
};
export type GetOneDto = {
    Request: t.infer<typeof getOneDto.request>;
    Response: t.infer<typeof getOneDto.response>;
};
export declare var createDto: {
    request: t.ZodObject<{
        name: t.ZodString;
        budgetLimit: t.ZodString;
        allowOverBudget: t.ZodBoolean;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodPipe<t.ZodObject<{
            id: t.ZodUUID;
            name: t.ZodString;
            budgetLimit: t.ZodNullable<t.ZodString>;
            allowOverBudget: t.ZodBoolean;
            createdAt: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>, t.ZodTransform<{
            isLimitless: () => boolean;
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }, {
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }>>;
    }, t.core.$strip>;
};
export type CreateDto = {
    Request: t.infer<typeof createDto.request>;
    Response: t.infer<typeof createDto.response>;
};
export declare var updateDto: {
    request: t.ZodObject<{
        id: t.ZodString;
        name: t.ZodString;
        budgetLimit: t.ZodString;
        allowOverBudget: t.ZodBoolean;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodPipe<t.ZodObject<{
            id: t.ZodUUID;
            name: t.ZodString;
            budgetLimit: t.ZodNullable<t.ZodString>;
            allowOverBudget: t.ZodBoolean;
            createdAt: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>, t.ZodTransform<{
            isLimitless: () => boolean;
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }, {
            id: string;
            name: string;
            budgetLimit: string | null;
            allowOverBudget: boolean;
            createdAt: string;
            updatedAt: string;
        }>>;
    }, t.core.$strip>;
};
export type UpdateDto = {
    Request: t.infer<typeof updateDto.request>;
    Response: t.infer<typeof updateDto.response>;
};
export declare var deleteDto: {
    request: t.ZodObject<{
        id: t.ZodString;
    }, t.core.$strip>;
};
export type DeleteDto = {
    Request: t.infer<typeof deleteDto.request>;
};
export declare var availableBudgetDto: {
    request: t.ZodObject<{
        id: t.ZodString;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodObject<{
            isLimitless: t.ZodBoolean;
            availableBudget: t.ZodString;
        }, t.core.$strip>;
    }, t.core.$strip>;
};
export type AvailableBudgetDto = {
    Request: t.infer<typeof availableBudgetDto.request>;
    Response: t.infer<typeof availableBudgetDto.response>;
};
