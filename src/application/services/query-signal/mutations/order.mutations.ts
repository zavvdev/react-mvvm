import { querySignalService } from "@/application/services/query-signal/query-signal.service";
import type { OrderModel } from "@/domain/models/order.model";
import { repositories } from "@/infrastructure/repositories";

export const orderMutationSignal = querySignalService.createMutationSignal(
  () => ({
    mutationFn: (order: OrderModel) => repositories.order.createOrder(order),
  }),
);

export type OrderMutationSignal = typeof orderMutationSignal;
