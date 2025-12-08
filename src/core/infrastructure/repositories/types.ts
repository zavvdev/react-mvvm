import { z as t, ZodType } from "zod";

// If your server returns a specific response format, you can create a reusable schema for it here
// and use it across your repository response schemas.
export const createResponseSchema = <T extends ZodType>(data: T) =>
  t.object({
    // ex:
    // status: t.string(),
    // message: t.string(),
    data,
  });

// and if you have a response that you don't care of the data shape
export type AnyResponse = t.infer<
  ReturnType<typeof createResponseSchema<t.ZodTypeAny>>
>;
