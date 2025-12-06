import type { z as t } from "zod";
export declare var getProfileDto: {
    response: t.ZodObject<{
        status: t.ZodEnum<{
            success: "success";
            error: "error";
        }>;
        message: t.ZodString;
        data: t.ZodObject<{
            id: t.ZodUUID;
            username: t.ZodString;
        }, t.core.$strip>;
    }, t.core.$strip>;
};
export type GetProfileDto = {
    Response: t.infer<typeof getProfileDto.response>;
};
