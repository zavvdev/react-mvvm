import { from, mergeMap } from "rxjs";
import { anyResponse } from "../schemas";
import { getProfileDto } from "./schemas";
export var createCommonApi = (http) => ({
  getProfile$: () =>
    from(http.get$("/me")).pipe(
      mergeMap((response) => from(getProfileDto.response.parseAsync(response))),
    ),
  deleteProfile$: () =>
    from(http.delete$("/me")).pipe(
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),
});
