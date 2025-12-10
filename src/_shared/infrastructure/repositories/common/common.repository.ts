import type { Http } from "@/_shared/infrastructure/transport/http/http.transport";
import {
  getStatusDto,
  type GetStatusDto,
} from "@/_shared/infrastructure/repositories/common/common.repository.types";
import { getServerStatusResponseMapping } from "@/_shared/infrastructure/repositories/common/common.repository.mapping";

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
