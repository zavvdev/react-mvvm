import { createOrderResponseMapping } from "@/infrastructure/repositories/order/order.repository.mapping";
import {
  type CreateOrderDto,
  createOrderDto,
} from "@/infrastructure/repositories/order/order.repository.types";
import { errorTrackerService } from "@/infrastructure/services/error-tracker/error-tracker.service";
import type { Http } from "@/infrastructure/transport/http/http.transport.factory";

export class OrderRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async createOrder(dto: CreateOrderDto["Request"]) {
    try {
      const request = createOrderDto.request.parse(dto);
      const response = await this.http.post<CreateOrderDto["Response"]>(
        "/order",
        request,
      );

      const mapped = createOrderResponseMapping(response);
      return createOrderDto.response.parse(mapped);
    } catch (error) {
      errorTrackerService.report({
        location: "OrderRepository/createOrder",
        message: "Failed to create order",
        error,
      });

      throw error;
    }
  }
}
