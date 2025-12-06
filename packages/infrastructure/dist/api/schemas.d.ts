import { z as t, type ZodType } from "zod";
export declare var response: <T extends ZodType>(data: T) => t.ZodObject<{
    status: t.ZodEnum<{
        success: "success";
        error: "error";
    }>;
    message: t.ZodString;
    data: T;
}, t.core.$strip>;
export declare var anyResponse: t.ZodObject<{
    status: t.ZodEnum<{
        success: "success";
        error: "error";
    }>;
    message: t.ZodString;
    data: t.ZodUnknown;
}, t.core.$strip>;
export type AnyResponse = t.infer<typeof anyResponse>;
