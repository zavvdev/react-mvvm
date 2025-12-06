import { z as t, type ZodType } from "zod";

export var response = <T extends ZodType>(data: T) =>
  t.object({
    status: t.enum(["success", "error"]),
    message: t.string(),
    data,
  });

export var anyResponse = response(t.unknown());

export type AnyResponse = t.infer<typeof anyResponse>;
