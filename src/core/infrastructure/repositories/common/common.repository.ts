import type { Http } from "@/core/infrastructure/transport/http/http";
import {
  getStatusDto,
  type GetStatusDto,
} from "@/core/infrastructure/repositories/common/common.repository.types";
import { getServerStatusResponseMapping } from "@/core/infrastructure/repositories/common/common.repository.mapping";

export class CommonRepository {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  async getServerStatus() {
    const response = await this.http.get<GetStatusDto["Response"]>("/status");
    const mapped = getServerStatusResponseMapping(response);
    return await getStatusDto.response.parseAsync(mapped);
  }
}
