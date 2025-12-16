import { z as t, type ZodType } from "zod";

export const createResponseSchema = <T extends ZodType>(data: T) =>
  t.object({
    status: t.string(),
    message: t.string(),
    data,
  });
