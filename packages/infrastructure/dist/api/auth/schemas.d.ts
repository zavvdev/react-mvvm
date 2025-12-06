import { z as t } from "zod";
export declare var registerDto: {
    request: t.ZodObject<{
        username: t.ZodString;
        password: t.ZodString;
    }, t.core.$strip>;
};
export type RegisterDto = {
    Request: t.infer<typeof registerDto.request>;
};
export declare var loginDto: {
    request: t.ZodObject<{
        username: t.ZodString;
        password: t.ZodString;
    }, t.core.$strip>;
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodObject<{
            token: t.ZodString;
        }, t.core.$strip>;
    }, t.core.$strip>;
};
export type LoginDto = {
    Request: t.infer<typeof loginDto.request>;
    Response: t.infer<typeof loginDto.response>;
};
