import type { z as t } from "zod";
export declare var getDto: {
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodObject<{
            currency: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>;
    }, t.core.$strip>;
};
export type GetDto = {
    Response: t.infer<typeof getDto.response>;
};
export declare var setDto: {
    request: t.ZodObject<{
        currency: t.ZodString;
        updatedAt: t.ZodString;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodObject<{
            currency: t.ZodString;
            updatedAt: t.ZodString;
        }, t.core.$strip>;
    }, t.core.$strip>;
};
export type SetDto = {
    Request: t.infer<typeof setDto.request>;
    Response: t.infer<typeof setDto.response>;
};
