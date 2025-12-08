import type { GetStatusDto } from "./common.repository.types";

// If for whatever reason the API response structure differs from
// the expected DTO structure, we can map it here.
// P.S It's ok to have any type here because we control the API response.
export function getServerStatusResponseMapping(
  data: any,
): GetStatusDto["Response"] {
  return {
    data: {
      status: data.server_status,
    },
  };
}
