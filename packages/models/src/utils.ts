import type { z as t } from "zod";

export var makeModel = <S extends t.ZodTypeAny>(schema: S) => ({
  schema,
  of: (data: unknown): t.infer<S> => schema.parse(data),
});
