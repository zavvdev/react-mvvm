import { z as t } from "zod";
import { Order } from "@/domain/models/order.model";
import { createResponseSchema } from "@/infrastructure/repositories/types";

// Create order DTO

export const createOrderDto = {
  request: Order.schema,
  response: createResponseSchema(t.any()),
};

export type CreateOrderDto = {
  Request: t.infer<typeof createOrderDto.request>;
  Response: t.infer<typeof createOrderDto.response>;
};
