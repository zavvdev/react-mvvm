import type { Http } from "@/infrastructure/transport/http/http.transport";
import {
  createOrderDto,
  type CreateOrderDto,
} from "@/infrastructure/repositories/order/order.repository.types";
import { createOrderResponseMapping } from "@/infrastructure/repositories/order/order.repository.mapping";

export class OrderRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async createOrder(dto: CreateOrderDto["Request"]) {
    const request = createOrderDto.request.parse(dto);
    const response = await this.http.post<CreateOrderDto["Response"]>(
      "/order",
      request,
    );

    const mapped = createOrderResponseMapping(response);
    return createOrderDto.response.parse(mapped);
  }
}
