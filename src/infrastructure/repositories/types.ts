import { z as t, ZodType } from "zod";

export const createResponseSchema = <T extends ZodType>(data?: T) =>
  t.object({
    status: t.string(),
    message: t.string(),
    data: data || t.any(),
  });
