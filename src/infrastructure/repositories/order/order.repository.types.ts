import { z as t } from "zod";
import { createResponseSchema } from "@/infrastructure/repositories/types";
import { Order } from "@/domain/models/order.model";

// Create order DTO

export const createOrderDto = {
  request: Order.schema,
  response: createResponseSchema(),
};

export type CreateOrderDto = {
  Request: t.infer<typeof createOrderDto.request>;
  Response: t.infer<typeof createOrderDto.response>;
};
