import type { CreateOrderDto } from "@/infrastructure/repositories/order/order.repository.types";

export function createOrderResponseMapping(
  _data: any,
): CreateOrderDto["Response"] {
  return {
    status: "success",
    message: "ok",
    data: null,
  };
}
