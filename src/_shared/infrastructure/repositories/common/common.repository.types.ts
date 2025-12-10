import { z as t } from "zod";
import { createResponseSchema } from "@/_shared/infrastructure/repositories/types";

// Get status DTO

export const getStatusDto = {
  response: createResponseSchema(
    t.object({
      status: t.string(),
    }),
  ),
};

export type GetStatusDto = {
  Response: t.infer<typeof getStatusDto.response>;
};
